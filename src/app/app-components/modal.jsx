import React from "react";
import "./modal.css";

export default function Modal({ isOpen, toggleModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
