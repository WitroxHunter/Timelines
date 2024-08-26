import React, { useRef, useEffect, useState } from "react";

import editIcon from "../../assets/icons/edit.svg";
import addIcon from "../../assets/icons/plus.svg";

import singleEventIcon from "../../assets/icons/pin.svg";
import multipleEventIcon from "../../assets/icons/calendar-event.svg";
import smileyIcon from "../../assets/icons/smiley.webp";

const DropdownMenu = () => {
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
            <li>
              <img src={singleEventIcon} />
              Single event
            </li>
            <li>
              <img src={multipleEventIcon} />
              Long event
            </li>
            {/* <li>
              <img
                src={smileyIcon}
                style={{ width: 24, filter: "grayscale(1) contrast(3)" }}
              />
              Wpierdol
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Canvas({ timelineData }) {
  const canvasRef = useRef(null);
  const [offset, setOffset] = useState({ x: 80, y: window.innerHeight / 2 });
  const [scale, setScale] = useState(0.9);
  const [isDragging, setIsDragging] = useState(false);

  const startDate = new Date(timelineData.startDate);
  const endDate = new Date(timelineData.endDate);
  const [points, setPoints] = useState([
    { date: new Date("2024-08-01"), label: "Event 1" },
    { date: new Date("2024-08-02"), label: "Event 2" },
    { date: new Date("2024-08-03"), label: "Event 3" },
    { date: new Date("2024-08-04"), label: "Event 4" },
  ]);

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

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(offset.x, offset.y);
      context.scale(scale, scale);

      drawTimeline(context);
      points.forEach((point) => drawPoint(context, point));
      const dateBoxMargin = 65;
      drawDateBox(context, startDate, 0 - dateBoxMargin);
      drawDateBox(context, endDate, canvas.width + dateBoxMargin - 60, true);

      context.restore();
    };

    const drawTimeline = (context) => {
      context.strokeStyle = "white";
      context.lineWidth = 2;
      const yPosition = 0;
      context.beginPath();
      context.moveTo(0, yPosition);
      context.lineTo(canvas.width, yPosition);
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

      // Border radius
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

      // Text position
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
  }, [offset, scale]);

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
    e.preventDefault();
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

      {/* <button className="add-button">
        <img src={addIcon} />
        <div>Add</div>
      </button> */}
      <DropdownMenu />
    </div>
  );
}
