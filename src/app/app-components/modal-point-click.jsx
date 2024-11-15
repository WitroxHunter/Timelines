import React from "react";
import "./modal.css";
import { removePointFromFirestore } from "./canvas-components/canvas-firestore-actions/firebaseUtils";

export default function ModalPoint({
  isOpen,
  toggleModal,
  point,
  currentUser,
  timelineId,
  children,
}) {
  if (!isOpen || !point) return null;

  const formattedDate = `${point.date.getDate()}.${
    point.date.getMonth() + 1
  }.${point.date.getFullYear()}`;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this point?")) {
      await removePointFromFirestore(timelineId, point.key, currentUser);
      toggleModal();
    }
  };

  return (
    <div className="modal-overlay-right" onClick={toggleModal}>
      <div className="modal-content-right" onClick={(e) => e.stopPropagation()}>
        <h2>{point.label}</h2>
        
        <div className="date-color-line">
        <p>{formattedDate}</p>
          <div
            className="color-line"
            style={{ backgroundColor: point.color }}
          ></div>
        </div>
        <p className="date-description">{point.description}</p>
        
        {children}

        <div className="date-modal-buttons">
          <button className="modal-button-right" onClick={handleDelete}>
            Delete point
          </button>
          <button className="modal-button-right" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
