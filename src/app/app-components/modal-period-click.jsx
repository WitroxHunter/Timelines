import React from "react";
import "./modal.css";
import { removePeriodFromFirestore } from "./canvas-components/canvas-firestore-actions/firebaseUtils";

export default function ModalPeriod({
  isOpen,
  toggleModal,
  period,
  currentUser,
  timelineId,
  children,
}) {
  if (!isOpen || !period) return null;

  const formattedStartDate = `${period.startDate.getDate()}.${
    period.startDate.getMonth() + 1
  }.${period.startDate.getFullYear()}`;
  const formattedEndDate = `${period.endDate.getDate()}.${
    period.endDate.getMonth() + 1
  }.${period.endDate.getFullYear()}`;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this period?")) {
      await removePeriodFromFirestore(timelineId, period.key, currentUser);
      toggleModal();
    }
  };

  return (
    <div className="modal-overlay-right" onClick={toggleModal}>
      <div className="modal-content-right" onClick={(e) => e.stopPropagation()}>
        <h2>{period.label}</h2>
        <p>{period.description}</p>
        <div className="date-color-line">
          <p>{formattedStartDate} - {formattedEndDate}</p>
          <div
            className="color-line"
            style={{ backgroundColor: period.color }}
          ></div>
        </div>
        {children}
        <button className="modal-button-right" onClick={handleDelete}>
          Delete period
        </button>
        <button className="modal-button-right" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
}
