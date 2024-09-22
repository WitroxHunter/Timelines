// canvasHooks.js
import { useState, useEffect, useCallback } from "react";
import { draw } from "./canvas-draw-functions/draw";

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

      // Adjust for offset and scale only on the X axis
      const adjustedX = (x - offset.x) / scale;
      const adjustedY = y - offset.y; // No scaling for Y

      let clickedPoint = null;
      let clickedPeriod = null;

      // Check periods
      periods.forEach((period) => {
        const periodStartX = calculateXPosition(period.startDate);
        const periodEndX = calculateXPosition(period.endDate);

        const rectHeight = 25; // Fixed height for periods
        const paddingBetweenLevels = 5;
        const rectY = -(35 + period.stackLevel * (rectHeight + paddingBetweenLevels));

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
          const yPosition = 0; // Fixed yPosition for points

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

// Hook for handling hover effect over points and periods
export const useCanvasHoverHandler = (canvasRef, points, periods, offset, scale, calculateXPosition) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hoveredPeriod, setHoveredPeriod] = useState(null);

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust for offset and scale only on the X axis
    const adjustedX = (x - offset.x) / scale;
    const adjustedY = y - offset.y; // No scaling for Y

    let isHovered = false;
    let newHoveredPoint = null;
    let newHoveredPeriod = null;

    // Check points
    points.forEach((point) => {
      const xPosition = calculateXPosition(point.date);
      const yPosition = 0; // Fixed yPosition for points

      const distance = Math.sqrt(
        Math.pow(adjustedX - xPosition, 2) + Math.pow(adjustedY - yPosition, 2)
      );

      if (distance <= 5) {
        isHovered = true;
        newHoveredPoint = point;
      }
    });

    // Check periods if no point is hovered
    if (!newHoveredPoint) {
      periods.forEach((period) => {
        const periodStartX = calculateXPosition(period.startDate);
        const periodEndX = calculateXPosition(period.endDate);

        const rectHeight = 25; // Fixed height for periods
        const paddingBetweenLevels = 5;
        const rectY = -(35 + period.stackLevel * (rectHeight + paddingBetweenLevels));

        if (
          adjustedX >= periodStartX &&
          adjustedX <= periodEndX &&
          adjustedY >= rectY &&
          adjustedY <= rectY + rectHeight
        ) {
          isHovered = true;
          newHoveredPeriod = period;
        }
      });
    }

    setHoveredPoint(newHoveredPoint);
    setHoveredPeriod(newHoveredPeriod);

    // Change cursor style based on hover state
    canvasRef.current.style.cursor = isHovered ? "pointer" : "grab";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasRef, points, periods, offset, scale, calculateXPosition]);

  return { hoveredPoint, hoveredPeriod };
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
