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
import calendarIcon from "../../assets/icons/calendar-event.svg";

import ModalPoint from "./modal-point-click";
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

  const startDate = new Date(timelineData.startDate);
  const endDate = new Date(timelineData.endDate);
  const points = Object.values(timelineData.points).map((point) => ({
    date: new Date(point.date),
    label: point.title,
    description: point.description,
  }));

  // Ustal długość osi czasu na podstawie liczby dni
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const pixelsPerDay = 10; // Dostosuj wartość, aby zmienić szerokość osi czasu
  const timelineWidth = totalDays * pixelsPerDay; // Całkowita szerokość osi czasu

  const [offset, setOffset] = useState({
    x: (window.innerWidth - timelineWidth) / 2, // Center the timeline
    y: window.innerHeight / 2,
  });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const [selectedPoint, setSelectedPoint] = useState(null); // Dodano nowy stan

  const calculateXPosition = (date) => {
    const totalDuration = endDate - startDate;
    const currentDuration = date - startDate;
    return (currentDuration / totalDuration) * timelineWidth;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
      drawTimelineEndLines(context, 0);
      drawTimelineEndLines(context, timelineWidth);

      context.restore();
    };

    const drawTimeline = (context) => {
      context.strokeStyle = "#555555";
      context.lineWidth = 2;
      const yPosition = 0;
      context.beginPath();
      context.moveTo(0, yPosition);
      context.lineTo(timelineWidth, yPosition); // Użyj timelineWidth tutaj
      context.stroke();
    };

    const drawDateBox = (context, date, xPosition, alignRight = false) => {
      const yPosition = 0;
      const textMargin = 7;
      const borderRadius = 5;
      const boxMargin = 5; // Adjust this value to set the desired margin from the timeline

      const formattedDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;

      context.font = "12px 'Source Sans 3'";
      const textWidth = context.measureText(formattedDate).width;

      const boxWidth = textWidth + 2 * textMargin;
      const boxHeight = 20;

      if (alignRight) {
        xPosition = timelineWidth + boxMargin; // Set margin for the right box
      } else {
        xPosition = 0 - boxWidth - boxMargin; // Set margin for the left box
      }

      context.fillStyle = "white";
      context.beginPath();
      context.moveTo(xPosition + borderRadius, yPosition - 10);
      context.lineTo(xPosition + boxWidth - borderRadius, yPosition - 10);
      context.arc(
        xPosition + boxWidth - borderRadius,
        yPosition - 10 + borderRadius,
        borderRadius,
        -Math.PI / 2,
        0
      );
      context.lineTo(
        xPosition + boxWidth,
        yPosition - 10 + boxHeight - borderRadius
      );
      context.arc(
        xPosition + boxWidth - borderRadius,
        yPosition - 10 + boxHeight - borderRadius,
        borderRadius,
        0,
        Math.PI / 2
      );
      context.lineTo(xPosition + borderRadius, yPosition - 10 + boxHeight);
      context.arc(
        xPosition + borderRadius,
        yPosition - 10 + boxHeight - borderRadius,
        borderRadius,
        Math.PI / 2,
        Math.PI
      );
      context.lineTo(xPosition, yPosition - 10 + borderRadius);
      context.arc(
        xPosition + borderRadius,
        yPosition - 10 + borderRadius,
        borderRadius,
        Math.PI,
        1.5 * Math.PI
      );
      context.closePath();
      context.fill();

      // Text
      context.fillStyle = "black";
      const textX = xPosition + textMargin;
      const textY = yPosition + 4;

      context.fillText(formattedDate, textX, textY);
    };

    const drawTimelineEndLines = (context, xPosition) => {
      context.strokeStyle = "#555555";
      context.lineWidth = 2;

      context.beginPath();
      context.moveTo(xPosition, -5); // Linia do góry o 10px
      context.lineTo(xPosition, 5); // Linia w dół o 10px
      context.stroke();
    };

    const drawPoint = (context, point) => {
      const xPosition = calculateXPosition(point.date);
      const yPosition = 0;
      context.fillStyle = "red";
      context.beginPath();
      context.arc(xPosition, yPosition, 5, 0, 2 * Math.PI);
      context.fill();
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const adjustedX = (x - offset.x) / scale;
      const adjustedY = (y - offset.y) / scale;

      points.forEach((point) => {
        const xPosition = calculateXPosition(point.date);
        const yPosition = 0;

        if (
          adjustedX >= xPosition - 5 &&
          adjustedX <= xPosition + 5 &&
          adjustedY >= yPosition - 5 &&
          adjustedY <= yPosition + 5
        ) {
          console.log("Point clicked:", point);
          setSelectedPoint(point);
        }
      });
    };

    canvas.addEventListener("click", handleClick);

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
  const [pointModalScreen, setPointModalScreen] = useState(false);

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

  const togglePointInfo = () => {
    setPointModalScreen(!pointModalScreen);
    if (!pointModalScreen) {
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

      {/* Modal for clicking on point */}
      <ModalPoint
        isOpen={!!selectedPoint} // Modal powinien otworzyć się, gdy `selectedPoint` nie jest null
        point={selectedPoint}
        toggleModal={() => setSelectedPoint(null)}
      ></ModalPoint>
      {/* Modal for Single Event */}
      <Modal isOpen={pointAddScreen} toggleModal={toggleSingleEventModal}>
        <h1>Add Single Event</h1>
        <div className="modal-grid">
          <div className="modal-input-box">
            <label>Title</label>
            <input
              className="modal-input"
              type="text"
              name="title"
              value={pointTitle}
              onChange={(e) => setPointTitle(e.target.value)}
            />
          </div>

          <div className="modal-input-box">
            <label>Starting date</label>
            <div className="modal-input-container">
              <img src={calendarIcon} className="modal-input-image" />
              <input
                className="modal-input"
                type="date"
                name="date"
                value={pointDate}
                onChange={(e) => setPointDate(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-input-box">
            <label>Description</label>
            <textarea
              className="modal-input"
              name="desc"
              value={pointDesc}
              onChange={(e) => setPointDesc(e.target.value)}
            />
          </div>

          <div className="modal-input-box">
            <button className="modal-button" onClick={toggleSingleEventModal}>
              Cancel
            </button>
            <button
              className="modal-button proceed-button"
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
          </div>
        </div>
      </Modal>

      {/* Modal for Long Event */}
      <Modal isOpen={longEventScreen} toggleModal={toggleLongEventModal}>
        <h1>Add Long Event</h1>
        <div className="modal-grid">
          <div className="modal-input-box">
            <label>Title</label>
            <input
              className="modal-input"
              type="text"
              name="longEventTitle"
              value={longEventTitle}
              onChange={(e) => setLongEventTitle(e.target.value)}
            />
          </div>

          <div className="modal-input-box">
            <label>Starting date</label>
            <div className="modal-input-container">
              <img src={calendarIcon} className="modal-input-image" />
              <input
                className="modal-input"
                type="date"
                name="longEventStartDate"
                value={longEventStartDate}
                onChange={(e) => setLongEventStartDate(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-input-box">
            <label>Ending Date</label>
            <div className="modal-input-container">
              <img src={calendarIcon} className="modal-input-image" />
              <input
                className="modal-input"
                type="date"
                name="longEventEndDate"
                value={longEventEndDate}
                onChange={(e) => setLongEventEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-input-box">
            <label>Description</label>
            <textarea
              className="modal-input"
              name="longEventDesc"
              value={longEventDesc}
              onChange={(e) => setLongEventDesc(e.target.value)}
            />
          </div>

          <div className="modal-input-box">
            <button className="modal-button" onClick={toggleLongEventModal}>
              Cancel
            </button>
            <button
              className="modal-button proceed-button"
              onClick={() => {
                // Add logic here to save the event data to Firebase or perform other actions
                toggleLongEventModal();
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
