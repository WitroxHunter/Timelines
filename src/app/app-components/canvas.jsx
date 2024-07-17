import React, { useRef, useEffect, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(offset.x, offset.y);
      context.scale(scale, scale);
      context.fillStyle = "blue";
      context.fillRect(50, 50, 100, 100);
      context.restore();
    };

    draw();
  }, [offset, scale]);

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return;
    setOffset((prevOffset) => ({
      x: prevOffset.x + e.movementX,
      y: prevOffset.y + e.movementY,
    }));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prevScale) => Math.max(0.1, prevScale - e.deltaY * 0.01));
  };

  return (
    <div className="canvas-box" style={{ overflow: "hidden" }}>
      <canvas
        className="canvas"
        ref={canvasRef}
        width={1300}
        height={800}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{ cursor: "grab" }}
      ></canvas>
    </div>
  );
}
