import React from "react";
import "./modal-period-click.css";
import { removePeriodFromFirestore } from "./canvas-components/firebaseUtils"; 

export default function ModalPeriod({ isOpen, toggleModal, period, currentUser, timelineId, children }) {
  if (!isOpen || !period) return null;

  const formattedStartDate = `${period.startDate.getDate()}-${period.startDate.getMonth() + 1}-${period.startDate.getFullYear()}`;
  const formattedEndDate = `${period.endDate.getDate()}-${period.endDate.getMonth() + 1}-${period.endDate.getFullYear()}`;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this period?")) {
      await removePeriodFromFirestore(timelineId, period.key, currentUser);
      toggleModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{period.label}</h2>
        <p>{period.description}</p>
        <p>{`From: ${formattedStartDate}`}</p>
        <p>{`To: ${formattedEndDate}`}</p>
        {children}
        <button className="modal-button" onClick={handleDelete}>
          Delete period
        </button>
        <button className="modal-button" onClick={toggleModal}>
          Leave
        </button>
      </div>
    </div>
  );
}
