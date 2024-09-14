import React from "react";
import "./modal.css";
import { removePointFromFirestore } from "./canvas-components/firebaseUtils";

export default function ModalPoint({
  isOpen,
  toggleModal,
  point,
  currentUser,
  timelineId,
  children,
}) {
  if (!isOpen || !point) return null;

  const formattedDate = `${point.date.getDate()}-${
    point.date.getMonth() + 1
  }-${point.date.getFullYear()}`;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this point?")) {
      await removePointFromFirestore(timelineId, point.key, currentUser);
      toggleModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{point.label}</h2>
        <p>{point.description}</p>
        <p>{formattedDate}</p>
        {children}
        <button className="modal-button" onClick={handleDelete}>
          Delete point
        </button>
        <button className="modal-button" onClick={toggleModal}>
          Leave
        </button>
      </div>
    </div>
  );
}
