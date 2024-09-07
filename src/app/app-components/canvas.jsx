import React, { useRef, useEffect, useState, useCallback } from "react";

import { draw } from "./canvas-components/draw";
import { addPointToFirestore, addPeriodToFirestore } from "./canvas-components/firebaseUtils";
import DropdownMenu from "./canvas-components/dropdownMenu";

import ModalPoint from "./modal-point-click";
import Modal from "./modal";
import ModalPeriod from "./modal-period-click";

import editIcon from "../../assets/icons/edit.svg";
import calendarIcon from "../../assets/icons/calendar-event.svg";


export default function Canvas({ timelineData, currentUser, timelineId }) {
  const canvasRef = useRef(null);

  const startDate = new Date(timelineData.startDate);
  const endDate = new Date(timelineData.endDate);

  const points = Object.entries(timelineData.points).map(([pointKey, point]) => ({
    key: pointKey,
    date: new Date(point.date),
    label: point.title,
    description: point.description,
  }));

  const periods = Object.values(timelineData.periods).map((period) => ({

    startDate: new Date(period.startDate),
    endDate: new Date(period.endDate),
    label: period.title,
    description: period.description,
  }));

  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const pixelsPerDay = 10; // Day width
  const timelineWidth = totalDays * pixelsPerDay; // Timeline width

  const [offset, setOffset] = useState({
    x: (window.innerWidth - timelineWidth) / 2, // Center the timeline
    y: window.innerHeight / 2,
  });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const [selectedPoint, setSelectedPoint] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [selectedPeriod, setSelectedPeriod] = useState(null);

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
  
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const adjustedX = (x - offset.x) / scale;
      const adjustedY = (y - offset.y) / scale;
  
      let clickedPoint = null;
      let clickedPeriod = null;
  
      // Sprawdzenie kliknięcia na punkt
      points.forEach((point) => {
        const xPosition = calculateXPosition(point.date);
        const yPosition = 0;
  
        const distance = Math.sqrt(
          Math.pow(adjustedX - xPosition, 2) + Math.pow(adjustedY - yPosition, 2)
        );
  
        if (distance <= 5) {
          clickedPoint = point;
        }
      });
  
      // Sprawdzenie kliknięcia na okres
      periods.forEach((period) => {
        const periodStartX = calculateXPosition(period.startDate);
        const periodEndX = calculateXPosition(period.endDate);
  
        if (adjustedX >= periodStartX && adjustedX <= periodEndX && adjustedY >= -40 && adjustedY <= -15) {
          clickedPeriod = period;
        }
      });
  
      if (clickedPoint) {
        console.log("Point clicked:", clickedPoint);
        setSelectedPoint(clickedPoint);
      } else if (clickedPeriod) {
        console.log("Period clicked:", clickedPeriod);
        setSelectedPeriod(clickedPeriod);
      } else {
        setSelectedPoint(null);
        setSelectedPeriod(null);
      }
    };
  
    canvas.addEventListener("click", handleClick);
  
    draw(
      context,
      offset,
      scale,
      timelineWidth,
      points,
      periods,
      hoveredPoint,
      startDate,
      endDate,
      calculateXPosition
    );
  
    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, [offset, scale, timelineWidth, hoveredPoint, points, periods, startDate, endDate]);
  

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const adjustedX = (x - offset.x) / scale;
      const adjustedY = (y - offset.y) / scale;

      let isHovered = false;
      let newHoveredPoint = null;

      points.forEach((point) => {
        const xPosition = calculateXPosition(point.date);
        const yPosition = 0;

        const distance = Math.sqrt(
          Math.pow(adjustedX - xPosition, 2) +
            Math.pow(adjustedY - yPosition, 2)
        );

        if (distance <= 5) {
          // 5 to promień punktu
          isHovered = true;
          newHoveredPoint = point;
        }
      });

      setHoveredPoint(newHoveredPoint);
      canvasRef.current.style.cursor = isHovered ? "pointer" : "grab";
    } else {
      setOffset((prevOffset) => ({
        x: prevOffset.x + e.movementX,
        y: prevOffset.y,
      }));
    }
  };

  const handleWheel = useCallback((e) => {
    const scaleAmount = e.deltaY > 0 ? 0.9 : 1.1;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    setOffset((prevOffset) => ({
      x: centerX - (centerX - prevOffset.x) * scaleAmount,
      y: prevOffset.y,
    }));
    setScale((prevScale) => Math.max(0.1, prevScale * scaleAmount));
  }, []);

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
        isOpen={!!selectedPoint}
        point={selectedPoint}
        currentUser={currentUser} 
        timelineId={timelineId}   
        toggleModal={() => setSelectedPoint(null)}
      />
      <ModalPeriod
        isOpen={!!selectedPeriod}
        period={selectedPeriod}
        currentUser={currentUser}
        timelineId={timelineId}
        toggleModal={() => setSelectedPeriod(null)}
      />
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
          const selectedDate = new Date(pointDate);

          // Walidacja daty punktu
          if (selectedDate < startDate || selectedDate > endDate) {
            alert("Please enter a valid date within the timeline range.");
            return;
          }

          // Dodaj punkt do Firestore
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
          const startDateEvent = new Date(longEventStartDate);
          const endDateEvent = new Date(longEventEndDate);

          // Walidacja daty okresu
          if (
            startDateEvent < startDate ||
            endDateEvent > endDate ||
            startDateEvent > endDateEvent
          ) {
            alert("Please enter valid start and end dates within the timeline range.");
            return;
          }

          // Dodaj okres do Firestore
          addPeriodToFirestore(
            longEventTitle,
            longEventStartDate,
            longEventEndDate,
            longEventDesc,
            currentUser,
            timelineId
          );

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
