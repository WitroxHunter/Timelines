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

    // Reset and close modal
    toggleModal();
    setLongEventTitle("");
    setLongEventStartDate("");
    setLongEventEndDate("");
    setLongEventDesc("");
    setPeriodColor("#FF007A");
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <div className="flex flex-col gap-4 max-h-[90vh] overflow-hidden">
        <h1>Add Long Event</h1>

        <div className="flex gap-8">
          {/* lewo */}
          <div className="flex flex-col gap-4 w-1/2">
            <div className="modal-input-box">
              <label>Title</label>
              <input
                className="modal-input"
                type="text"
                value={longEventTitle}
                onChange={(e) => setLongEventTitle(e.target.value)}
              />
            </div>

            <div className="modal-input-box">
              <label>Starting date</label>
              <div className="modal-input-container">
                <img
                  src={calendarIcon}
                  className="modal-input-image"
                  alt="Calendar"
                />
                <input
                  className="modal-input"
                  type="date"
                  value={longEventStartDate}
                  onChange={(e) => setLongEventStartDate(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-input-box">
              <label>Ending Date</label>
              <div className="modal-input-container">
                <img
                  src={calendarIcon}
                  className="modal-input-image"
                  alt="Calendar"
                />
                <input
                  className="modal-input"
                  type="date"
                  value={longEventEndDate}
                  onChange={(e) => setLongEventEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-input-box">
              <label>Description</label>
              <textarea
                className="modal-input"
                value={longEventDesc}
                onChange={(e) => setLongEventDesc(e.target.value)}
              />
            </div>
          </div>

          {/* prawo */}
          <div className="flex flex-col gap-4 w-1/2">
            <div className="modal-input-box ">
              <label>Color</label>
              <div className="color-picker-box">
                <HexColorPicker color={periodColor} onChange={setPeriodColor} />
                <input
                  type="text"
                  className="color-picker-input"
                  value={periodColor}
                  onChange={(e) => setPeriodColor(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <button className="modal-button" onClick={toggleModal}>
                Cancel
              </button>
              <button
                className="modal-button proceed-button"
                onClick={handleAddPeriod}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
