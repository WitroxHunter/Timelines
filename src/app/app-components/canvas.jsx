import React, { useRef, useState } from "react";
import { useCanvasInteractions, useCanvasClickHandler, useCanvasHoverHandler, useCanvasDraw } from "./canvas-components/canvasHooks";
import DropdownMenu from "./canvas-components/dropdownMenu";
import TimelineTitleEditor from "./canvas-components/canvas-firestore-actions/timelineTitleEditor";
import ModalPoint from "./modal-point-click";
import ModalPeriod from "./modal-period-click";
import AddPointModal from "./canvas-components/canvas-firestore-actions/addPointModal";
import AddPeriodModal from "./canvas-components/canvas-firestore-actions/addPeriodModal";

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

  /*
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const pixelsPerDay = 10;
  const timelineWidth = totalDays * pixelsPerDay;
*/

const timelineWidth = window.innerWidth - 300;  // Ustaw szerokość timeline na szerokość okna

  const { offset, scale, handleMouseDown, handleMouseUp, handleMouseMove, handleWheel, isDragging } =
    useCanvasInteractions(timelineWidth);

    const calculateXPosition = (date) => {
      const totalDuration = endDate - startDate;
      const currentDuration = date - startDate;
      return (currentDuration / totalDuration) * timelineWidth;  // Proporcja do szerokości ekranu
    };
    

  const { selectedPoint, setSelectedPoint, selectedPeriod, setSelectedPeriod } =
    useCanvasClickHandler(canvasRef, points, periods, offset, scale, calculateXPosition);

  const { hoveredPoint, handleMouseMove: handleHoverMove } =
    useCanvasHoverHandler(canvasRef, points, offset, scale, calculateXPosition);

  useCanvasDraw(canvasRef, offset, scale, timelineWidth, points, periods, hoveredPoint, startDate, endDate, calculateXPosition);


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
