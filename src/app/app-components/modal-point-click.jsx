import React from "react";
import "./modal-point-click.css";

export default function ModalPoint({ isOpen, toggleModal, point, children }) {
  if (!isOpen) return null;
  const formattedDate = `${point.date.getDate()}-${
    point.date.getMonth() + 1
  }-${point.date.getFullYear()}`;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{point.label}</h2>
        <p>{point.description}</p>
        <p>{formattedDate}</p>
        {children}
      </div>
    </div>
  );
}
