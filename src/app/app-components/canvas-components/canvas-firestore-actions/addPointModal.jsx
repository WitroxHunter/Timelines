import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Modal from "../../modal";
import calendarIcon from "../../../../assets/icons/calendar-event.svg";
import { addPointToFirestore } from "./firebaseUtils";

export default function AddPointModal({
  isOpen,
  toggleModal,
  currentUser,
  timelineId,
  startDate,
  endDate
}) {
  const [pointTitle, setPointTitle] = useState("");
  const [pointDate, setPointDate] = useState("");
  const [pointDesc, setPointDesc] = useState("");
  const [pointColor, setPointColor] = useState("#0094FF");

  const handleProceed = () => {
    const selectedDate = new Date(pointDate);

    // Validate point date
    if (selectedDate < startDate || selectedDate > endDate) {
      alert("Please enter a valid date within the timeline range.");
      return;
    }

    // Add point to Firestore
    addPointToFirestore(
      pointTitle,
      pointDate,
      pointDesc,
      pointColor,
      currentUser,
      timelineId
    );

    // Reset and close modal
    toggleModal();
    setPointTitle("");
    setPointDate("");
    setPointDesc("");
    setPointColor("#0094FF");
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <h1>Add Single Event</h1>
      <div className="modal-grid">
        <div className="modal-input-box">
          <label>Title</label>
          <input
            className="modal-input"
            type="text"
            name="title"
            value={pointTitle}
            onChange={(e) => setPointTitle(e.target.value)}
          />
        </div>

        <div className="modal-input-box">
          <label>Starting date</label>
          <div className="modal-input-container">
            <img src={calendarIcon} className="modal-input-image" alt="Calendar Icon" />
            <input
              className="modal-input"
              type="date"
              name="date"
              value={pointDate}
              onChange={(e) => setPointDate(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-input-box">
          <label>Description</label>
          <textarea
            className="modal-input"
            name="desc"
            value={pointDesc}
            onChange={(e) => setPointDesc(e.target.value)}
          />
        </div>

        <div className="modal-input-box">
          <label>Color</label>
          <div className="color-picker-box">
            <HexColorPicker color={pointColor} onChange={setPointColor} />
            <input
              type="text"
              placeholder="#ffffff"
              value={pointColor}
              className="color-picker-input"
              onChange={(e) => setPointColor(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-input-box">
          <button className="modal-button" onClick={toggleModal}>
            Cancel
          </button>
          <button className="modal-button proceed-button" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </Modal>
  );
}
