import React, { useRef, useState, useEffect } from "react";
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

  const timelineWidth = window.innerWidth - 300;

  const { offset, scale, handleMouseDown, handleMouseUp, handleMouseMove: handleDragMove, handleWheel, isDragging } =
    useCanvasInteractions(timelineWidth);

  const calculateXPosition = (date) => {
    const totalDuration = endDate - startDate;
    const currentDuration = date - startDate;
    return (currentDuration / totalDuration) * timelineWidth;
  };

  // Funkcja do obliczania warstw dla periodów
  const calculatePeriodLayers = (periods) => {
    let layers = [];

    periods.forEach((currentPeriod) => {
      let assignedLayer = -1;

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const conflict = layer.some(period =>
          !(currentPeriod.endDate < period.startDate || currentPeriod.startDate > period.endDate)
        );

        if (!conflict) {
          assignedLayer = i;
          break;
        }
      }

      if (assignedLayer === -1) {
        assignedLayer = layers.length;
        layers.push([]);
      }

      layers[assignedLayer].push(currentPeriod);
      currentPeriod.stackLevel = assignedLayer;
    });

    return periods;
  };

  const periodsWithLayers = calculatePeriodLayers(periods);

  const { selectedPoint, setSelectedPoint, selectedPeriod, setSelectedPeriod } =
    useCanvasClickHandler(canvasRef, points, periodsWithLayers, offset, scale, calculateXPosition);

  const { hoveredPoint, hoveredPeriod, handleMouseMove: handleHoverMove } =
    useCanvasHoverHandler(canvasRef, points, periodsWithLayers, offset, scale, calculateXPosition);

  useCanvasDraw(canvasRef, offset, scale, timelineWidth, points, periodsWithLayers, hoveredPoint, startDate, endDate, calculateXPosition);

  const [showModal, setShowModal] = useState({ point: false, period: false });
  const [timelineTitle, setTimelineTitle] = useState(timelineData.title);

  const toggleModal = (type) => {
    setShowModal((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Połączenie logiki hover i przenoszenia
  const handleMouseMoveCombined = (e) => {
    handleDragMove(e); // Przenoszenie elementów
    //handleHoverMove(e); // Obsługa efektu hover
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
        onMouseMove={handleMouseMoveCombined} // Używamy połączonej funkcji
        onWheel={handleWheel}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      ></canvas>

      <DropdownMenu
        onSingleEventClick={() => toggleModal("point")}
        onLongEventClick={() => toggleModal("period")}
      />

      <ModalPoint
        isOpen={!!selectedPoint}
        point={selectedPoint}
        currentUser={currentUser}
        timelineId={timelineId}
        toggleModal={() => setSelectedPoint(null)}
      ></ModalPoint>

      <ModalPeriod
        isOpen={!!selectedPeriod}
        period={selectedPeriod}
        currentUser={currentUser}
        timelineId={timelineId}
        toggleModal={() => setSelectedPeriod(null)}
      ></ModalPeriod>

      <AddPointModal
        isOpen={showModal.point}
        toggleModal={() => toggleModal("point")}
        currentUser={currentUser}
        timelineId={timelineId}
        startDate={startDate}
        endDate={endDate}
      />

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

