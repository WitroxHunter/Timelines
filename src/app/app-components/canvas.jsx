import React, { useRef, useEffect, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [offset, setOffset] = useState({ x: 80, y: 0 });
  const [scale, setScale] = useState(0.9);
  const [isDragging, setIsDragging] = useState(false);

  const startDate = new Date("2006-08-24");
  const endDate = new Date("2024-07-18");
  const points = [
    { date: new Date("2007-04-21"), label: "Event 1" },
    { date: new Date("2024-01-23"), label: "Event 2" },
    { date: new Date("2010-02-02"), label: "Event 3" },
  ];

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
      const yPosition = canvas.height / 2;
      context.beginPath();
      context.moveTo(0, yPosition);
      context.lineTo(canvas.width, yPosition);
      context.stroke();
    };

    const drawDateBox = (context, date, xPosition, alignRight = false) => {
      const yPosition = canvas.height / 2;
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
      context.font = "10px Arial";

      // Text position
      const textWidth = context.measureText(formattedDate).width;
      const textX = xPosition + (alignRight ? boxWidth - textWidth + 53 : 5);
      const textY = yPosition + 4;

      context.fillText(formattedDate, textX, textY);
    };

    const drawPoint = (context, point) => {
      const xPosition = calculateXPosition(point.date);
      const yPosition = canvas.height / 2;
      context.fillStyle = "red";
      context.beginPath();
      context.arc(xPosition, yPosition, 5, 0, 2 * Math.PI);
      context.fill();

      context.fillStyle = "white";
      context.font = "12px Arial";
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
    setScale((prevScale) => Math.max(0.1, prevScale * scaleAmount));
  };

  return (
    <div className="canvas-box" style={{ overflow: "hidden" }}>
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      ></canvas>
    </div>
  );
}