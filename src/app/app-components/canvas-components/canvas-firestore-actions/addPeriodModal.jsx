import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Modal from "../../modal";
import calendarIcon from "../../../../assets/icons/calendar-event.svg";
import { addPeriodToFirestore } from "./firebaseUtils";

export default function AddPeriodModal({
  isOpen,
  toggleModal,
  timelineStartDate,
  timelineEndDate,
  currentUser,
  timelineId,
}) {
  const [longEventTitle, setLongEventTitle] = useState("");
  const [longEventStartDate, setLongEventStartDate] = useState("");
  const [longEventEndDate, setLongEventEndDate] = useState("");
  const [longEventDesc, setLongEventDesc] = useState("");
  const [periodColor, setPeriodColor] = useState("#FF007A");

  const handleAddPeriod = () => {
    const startDateEvent = new Date(longEventStartDate);
    const endDateEvent = new Date(longEventEndDate);

    // Validate the period dates
    if (
      startDateEvent < timelineStartDate ||
      endDateEvent > timelineEndDate ||
      startDateEvent > endDateEvent
    ) {
      alert(
        "Please enter valid start and end dates within the timeline range."
      );
      return;
    }

    // Add period to Firestore
    addPeriodToFirestore(
      longEventTitle,
      longEventStartDate,
      longEventEndDate,
      longEventDesc,
      periodColor,
      currentUser,
      timelineId
    );

    toggleModal(); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <h1>Add Long Event</h1>
      <div className="modal-grid">
        <div className="modal-input-box">
          <label>Title</label>
          <input
            className="modal-input"
            type="text"
            name="longEventTitle"
            value={longEventTitle}
            onChange={(e) => setLongEventTitle(e.target.value)}
          />
        </div>

        <div className="modal-input-box">
          <label>Starting date</label>
          <div className="modal-input-container">
            <img src={calendarIcon} className="modal-input-image" alt="Calendar" />
            <input
              className="modal-input"
              type="date"
              name="longEventStartDate"
              value={longEventStartDate}
              onChange={(e) => setLongEventStartDate(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-input-box">
          <label>Ending Date</label>
          <div className="modal-input-container">
            <img src={calendarIcon} className="modal-input-image" alt="Calendar" />
            <input
              className="modal-input"
              type="date"
              name="longEventEndDate"
              value={longEventEndDate}
              onChange={(e) => setLongEventEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-input-box">
          <label>Description</label>
          <textarea
            className="modal-input"
            name="longEventDesc"
            value={longEventDesc}
            onChange={(e) => setLongEventDesc(e.target.value)}
          />
        </div>

        <div className="modal-input-box">
          <label>Color</label>
          <div className="color-picker-box">
            <HexColorPicker color={periodColor} onChange={setPeriodColor} />
            <input
              type="text"
              placeholder="#ffffff"
              value={periodColor}
              className="color-picker-input"
              onChange={(e) => setPeriodColor(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-input-box">
          <button className="modal-button" onClick={toggleModal}>
            Cancel
          </button>
          <button className="modal-button proceed-button" onClick={handleAddPeriod}>
            Proceed
          </button>
        </div>
      </div>
    </Modal>
  );
}
