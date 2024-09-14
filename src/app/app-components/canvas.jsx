import React, { useRef, useEffect, useState, useCallback } from "react";
import { HexColorPicker } from "react-colorful";

import { draw } from "./canvas-components/draw";
import { addPointToFirestore, addPeriodToFirestore, changeTimelineName } from "./canvas-components/firebaseUtils";
import DropdownMenu from "./canvas-components/dropdownMenu";
import TimelineTitleEditor from "./canvas-components/canvas-firestore-actions/timelineTitleEditor";


import Modal from "./modal";
import ModalPeriod from "./modal-period-click";
import AddPeriodModal from "./canvas-components/addPeriodModal";
import ModalPoint from "./modal-point-click";
import AddPointModal from "./canvas-components/addPointModal";

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
    color: point.color
  }));

  const periods = Object.entries(timelineData.periods).map(([periodKey, period]) => ({
    key: periodKey,
    startDate: new Date(period.startDate),
    endDate: new Date(period.endDate),
    label: period.title,
    description: period.description,
    color: period.color
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
    
      // Check period first
      periods.forEach((period, index) => {
        const periodStartX = calculateXPosition(period.startDate);
        const periodEndX = calculateXPosition(period.endDate);
    
        const rectHeight = 25;
        const paddingBetweenLevels = 7;
    
        const rectY = -(35 + index * (rectHeight + paddingBetweenLevels));
    
        if (
          adjustedX >= periodStartX &&
          adjustedX <= periodEndX &&
          adjustedY >= rectY &&
          adjustedY <= rectY + rectHeight
        ) {
          clickedPeriod = period;
        }
      });
    
      // Then check point
      if (!clickedPeriod) {
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
      }
    
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

  const [showModal, setShowModal] = useState({ point: false, period: false });

  const [timelineTitle, setTimelineTitle] = useState(timelineData.title)

  const toggleModal = (type) => {
    setShowModal((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div
      className="canvas-box"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <TimelineTitleEditor
        timelineTitle={timelineTitle}
        setTimelineTitle={setTimelineTitle}
        timelineData={timelineData}
        currentUser={currentUser}
        timelineId={timelineId}
      />
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
        onSingleEventClick={() => toggleModal("point")}
        onLongEventClick={() => toggleModal("period")}
      />

      {/* Modal for clicking on point */}
      <ModalPoint
        isOpen={!!selectedPoint}
        point={selectedPoint}
        currentUser={currentUser} 
        timelineId={timelineId}   
        toggleModal={() => setSelectedPoint(null)}
      ></ModalPoint>

      {/* Modal for clicking on period */}
      <ModalPeriod
        isOpen={!!selectedPeriod}
        period={selectedPeriod}
        currentUser={currentUser}
        timelineId={timelineId}
        toggleModal={() => setSelectedPeriod(null)}
      ></ModalPeriod>

      {/* Modal for adding point */}
      <AddPointModal
        isOpen={showModal.point}
        toggleModal={() => toggleModal("point")}
        currentUser={currentUser}
        timelineId={timelineId}
        startDate={startDate}
        endDate={endDate}
      />

      {/* Modal for adding period */}
      <AddPeriodModal
        isOpen={showModal.period}
        toggleModal={() => toggleModal("period")}
        timelineStartDate={startDate}
        timelineEndDate={endDate}
        currentUser={currentUser}
        timelineId={timelineId}
      />
    </div>
  );
}
