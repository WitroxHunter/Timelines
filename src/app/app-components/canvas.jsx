import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import { Firestore } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

import editIcon from "../../assets/icons/edit.svg";
import addIcon from "../../assets/icons/plus.svg";
import { doc, updateDoc } from "firebase/firestore";

import singleEventIcon from "../../assets/icons/pin.svg";
import multipleEventIcon from "../../assets/icons/calendar-event.svg";

import Modal from "./modal";

const DropdownMenu = ({ onSingleEventClick, onLongEventClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="add-button-dropdown" ref={menuRef}>
      <button className="add-button" onClick={toggleMenu}>
        <img src={addIcon} />
        <div>Add</div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li
              onClick={() => {
                toggleMenu();
                onSingleEventClick();
              }}
            >
              <img src={singleEventIcon} />
              Single event
            </li>
            <li
              onClick={() => {
                toggleMenu();
                onLongEventClick();
              }}
            >
              <img src={multipleEventIcon} />
              Long event
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const addPointToFirestore = async (
  pointTitle,
  pointDate,
  pointDesc,
  currentUser,
  timelineId
) => {
  if (!pointTitle || !pointDate) {
    alert("Please fill in all fields.");
    return;
  }

  const uid = currentUser.uid;
  const pointId = `point_${Date.now()}`;

  const newPointData = {
    title: pointTitle,
    date: pointDate,
    description: pointDesc,
  };

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.points.${pointId}`]: newPointData,
    });

    console.log("New point added successfully");

    // Aktualizacja lokalnego stanu timelineData
    setTimelineData((prevData) => {
      return {
        ...prevData,
        points: {
          ...prevData.points,
          [pointId]: newPointData,
        },
      };
    });
  } catch (error) {
    console.error("Error adding point: ", error);
  }
};

export default function Canvas({ timelineData, currentUser, timelineId }) {
  const canvasRef = useRef(null);
  const [offset, setOffset] = useState({ x: 80, y: window.innerHeight / 2 });
  const [scale, setScale] = useState(0.9);
  const [isDragging, setIsDragging] = useState(false);

  const startDate = new Date(timelineData.startDate);
  const endDate = new Date(timelineData.endDate);
  const points = Object.values(timelineData.points).map((point) => ({
    date: new Date(point.date),
    label: point.title,
  }));

  const calculateXPosition = (date) => {
    const totalDuration = endDate - startDate;
    const currentDuration = date - startDate;
    const canvasWidth = window.innerWidth;
    return (currentDuration / totalDuration) * canvasWidth;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const pixelsPerDay = 10;
    const timelineWidth = totalDays * pixelsPerDay;

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(offset.x, offset.y);
      context.scale(scale, scale);

      drawTimeline(context);
      points.forEach((point) => drawPoint(context, point));
      const dateBoxMargin = 65;
      drawDateBox(context, startDate, 0 - dateBoxMargin);
      drawDateBox(context, endDate, timelineWidth + dateBoxMargin - 60, true);

      context.restore();
    };

    const drawTimeline = (context) => {
      context.strokeStyle = "white";
      context.lineWidth = 2;
      const yPosition = 0;
      context.beginPath();
      context.moveTo(0, yPosition);
      context.lineTo(timelineWidth, yPosition);
      context.stroke();
    };

    const drawDateBox = (context, date, xPosition, alignRight = false) => {
      const yPosition = 0;
      const boxWidth = 60;
      const boxHeight = 20;
      const borderRadius = 5;

      if (alignRight) {
        xPosition -= boxWidth;
      }

      context.fillStyle = "gray";
      context.beginPath();
      context.moveTo(
        xPosition + (alignRight ? boxWidth : 0) + borderRadius,
        yPosition - 10
      );
      context.lineTo(
        xPosition + (alignRight ? boxWidth : 0) + boxWidth - borderRadius,
        yPosition - 10
      );
      context.arc(
        xPosition + (alignRight ? boxWidth : 0) + boxWidth - borderRadius,
        yPosition - 10 + borderRadius,
        borderRadius,
        -Math.PI / 2,
        0
      );
      context.lineTo(
        xPosition + (alignRight ? boxWidth : 0) + boxWidth,
        yPosition - 10 + boxHeight - borderRadius
      );
      context.arc(
        xPosition + (alignRight ? boxWidth : 0) + boxWidth - borderRadius,
        yPosition - 10 + boxHeight - borderRadius,
        borderRadius,
        0,
        Math.PI / 2
      );
      context.lineTo(
        xPosition + (alignRight ? boxWidth : 0) + borderRadius,
        yPosition - 10 + boxHeight
      );
      context.arc(
        xPosition + (alignRight ? boxWidth : 0) + borderRadius,
        yPosition - 10 + boxHeight - borderRadius,
        borderRadius,
        Math.PI / 2,
        Math.PI
      );
      context.lineTo(
        xPosition + (alignRight ? boxWidth : 0),
        yPosition - 10 + borderRadius
      );
      context.arc(
        xPosition + (alignRight ? boxWidth : 0) + borderRadius,
        yPosition - 10 + borderRadius,
        borderRadius,
        Math.PI,
        1.5 * Math.PI
      );
      context.closePath();
      context.fill();

      const formattedDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      context.fillStyle = "white";
      context.font = "12px 'Source Sans 3'";

      const textWidth = context.measureText(formattedDate).width;
      const textX = xPosition + (alignRight ? boxWidth - textWidth + 53 : 5);
      const textY = yPosition + 4;

      context.fillText(formattedDate, textX, textY);
    };

    const drawPoint = (context, point) => {
      const xPosition = calculateXPosition(point.date);
      const yPosition = 0;
      context.fillStyle = "red";
      context.beginPath();
      context.arc(xPosition, yPosition, 5, 0, 2 * Math.PI);
      context.fill();

      context.fillStyle = "white";
      context.font = "12px 'Source Sans 3'";
      context.fillText(point.label, xPosition - 20, yPosition + 20);
    };

    draw();
  }, [timelineData, offset, scale, points]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset((prevOffset) => ({
      x: prevOffset.x + e.movementX,
      y: prevOffset.y,
    }));
  };

  const handleWheel = (e) => {
    const scaleAmount = e.deltaY > 0 ? 0.9 : 1.1;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    setOffset((prevOffset) => ({
      x: centerX - (centerX - prevOffset.x) * scaleAmount,
      y: prevOffset.y,
    }));
    setScale((prevScale) => Math.max(0.1, prevScale * scaleAmount));
  };

  const [pointAddScreen, setPointAddScreen] = useState(false);
  const [longEventScreen, setLongEventScreen] = useState(false);

  const [pointTitle, setPointTitle] = useState("");
  const [pointDate, setPointDate] = useState("");
  const [pointDesc, setPointDesc] = useState("");

  const [longEventTitle, setLongEventTitle] = useState("");
  const [longEventStartDate, setLongEventStartDate] = useState("");
  const [longEventEndDate, setLongEventEndDate] = useState("");
  const [longEventDesc, setLongEventDesc] = useState("");

  const toggleSingleEventModal = () => {
    setPointAddScreen(!pointAddScreen);
    if (!pointAddScreen) {
      setPointTitle("");
      setPointDate("");
      setPointDesc("");
    }
  };

  const toggleLongEventModal = () => {
    setLongEventScreen(!longEventScreen);
    if (!longEventScreen) {
      setLongEventTitle("");
      setLongEventStartDate("");
      setLongEventEndDate("");
      setLongEventDesc("");
    }
  };

  return (
    <div
      className="canvas-box"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="opened-timeline-file-name">
        <div>{timelineData.title}</div>
        <img src={editIcon} />
      </div>
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      ></canvas>

      <DropdownMenu
        onSingleEventClick={toggleSingleEventModal}
        onLongEventClick={toggleLongEventModal}
      />

      {/* Modal for Single Event */}
      <Modal isOpen={pointAddScreen} toggleModal={toggleSingleEventModal}>
        <h2>Add Single Event</h2>
        <div>
          <label>Title:</label>
          <input
            className="modal-input"
            type="text"
            name="title"
            value={pointTitle}
            onChange={(e) => setPointTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            className="modal-input"
            type="date"
            name="date"
            value={pointDate}
            onChange={(e) => setPointDate(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="modal-input"
            name="desc"
            value={pointDesc}
            onChange={(e) => setPointDesc(e.target.value)}
          />
        </div>
        <button className="modal-button" onClick={toggleSingleEventModal}>
          Cancel
        </button>
        <button
          className="modal-button float-right"
          onClick={() => {
            addPointToFirestore(
              pointTitle,
              pointDate,
              pointDesc,
              currentUser,
              timelineId
            );

            toggleSingleEventModal();
          }}
        >
          Proceed
        </button>
      </Modal>

      {/* Modal for Long Event */}
      <Modal isOpen={longEventScreen} toggleModal={toggleLongEventModal}>
        <h2>Add Long Event</h2>
        <div>
          <label>Title:</label>
          <input
            className="modal-input"
            type="text"
            name="longEventTitle"
            value={longEventTitle}
            onChange={(e) => setLongEventTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            className="modal-input"
            type="date"
            name="longEventStartDate"
            value={longEventStartDate}
            onChange={(e) => setLongEventStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            className="modal-input"
            type="date"
            name="longEventEndDate"
            value={longEventEndDate}
            onChange={(e) => setLongEventEndDate(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="modal-input"
            name="longEventDesc"
            value={longEventDesc}
            onChange={(e) => setLongEventDesc(e.target.value)}
          />
        </div>
        <button className="modal-button" onClick={toggleLongEventModal}>
          Cancel
        </button>
        <button
          className="modal-button float-right"
          onClick={() => {
            // Add logic here to save the event data to Firebase or perform other actions
            toggleLongEventModal();
          }}
        >
          Proceed
        </button>
      </Modal>
    </div>
  );
}
