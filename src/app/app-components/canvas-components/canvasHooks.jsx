// canvasHooks.js
import { useState, useEffect, useCallback } from "react";
import { draw } from "./draw";

// Hook for handling canvas offset, scale, and dragging
export const useCanvasInteractions = (timelineWidth) => {
  const [offset, setOffset] = useState({
    x: (window.innerWidth - timelineWidth) / 2, // Center the timeline
    y: window.innerHeight / 2,
  });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      setOffset((prevOffset) => ({
        x: prevOffset.x + e.movementX,
        y: prevOffset.y,
      }));
    }
  };

  const handleWheel = useCallback((e) => {
    const scaleAmount = e.deltaY > 0 ? 0.9 : 1.1;
    const rect = window.innerWidth / 2;
    setOffset((prevOffset) => ({
      x: rect - (rect - prevOffset.x) * scaleAmount,
      y: prevOffset.y,
    }));
    setScale((prevScale) => Math.max(0.1, prevScale * scaleAmount));
  }, []);

  return {
    offset,
    scale,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleWheel,
    isDragging,
  };
};

// Hook for handling canvas click logic (selecting points or periods)
export const useCanvasClickHandler = (canvasRef, points, periods, offset, scale, calculateXPosition) => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const adjustedX = (x - offset.x) / scale;
      const adjustedY = (y - offset.y) / scale;

      let clickedPoint = null;
      let clickedPeriod = null;

      // Check periods
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

      // Check points if no period clicked
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
        setSelectedPoint(clickedPoint);
      } else if (clickedPeriod) {
        setSelectedPeriod(clickedPeriod);
      } else {
        setSelectedPoint(null);
        setSelectedPeriod(null);
      }
    };

    canvas.addEventListener("click", handleClick);
    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, [canvasRef, points, periods, offset, scale, calculateXPosition]);

  return { selectedPoint, setSelectedPoint, selectedPeriod, setSelectedPeriod };
};

// Hook for handling hover effect over points
export const useCanvasHoverHandler = (canvasRef, points, offset, scale, calculateXPosition) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;

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
        isHovered = true;
        newHoveredPoint = point;
      }
    });

    setHoveredPoint(newHoveredPoint);
    canvasRef.current.style.cursor = isHovered ? "pointer" : "grab";
  };

  return { hoveredPoint, handleMouseMove };
};

// Hook for drawing the timeline and points/periods
export const useCanvasDraw = (canvasRef, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
  }, [offset, scale, timelineWidth, hoveredPoint, points, periods, startDate, endDate, calculateXPosition]);
};
