import React, { useState } from "react";
import Modal from "../../modal";
import {
  bulkAddPointsToFirestore,
  bulkAddPeriodsToFirestore,
} from "./firebaseUtils";

export default function BulkAddModal({
  isOpen,
  toggleModal,
  currentUser,
  timelineId,
}) {
  const [rawData, setRawData] = useState("");

  const parseJsonSafely = () => {
    try {
      const parsed = JSON.parse(rawData);
      if (!Array.isArray(parsed)) {
        alert("JSON must be an array.");
        return null;
      }
      return parsed;
    } catch (error) {
      alert("Invalid JSON format.");
      return null;
    }
  };

  const handleBulkAddPoints = async () => {
    const parsedData = parseJsonSafely();
    if (!parsedData) return;

    await bulkAddPointsToFirestore(parsedData, currentUser, timelineId);

    toggleModal();
    setRawData("");
  };

  const handleBulkAddPeriods = async () => {
    const parsedData = parseJsonSafely();
    if (!parsedData) return;

    await bulkAddPeriodsToFirestore(parsedData, currentUser, timelineId);

    toggleModal();
    setRawData("");
  };

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <h1>Bulk add</h1>

      <div className="modal-grid">
        <div className="modal-input-box">
          <label>Paste JSON data</label>
          <textarea
            className="modal-input"
            rows={12}
            placeholder='[ { "title": "...", "date": "...", "description": "...", "color": "#fff" } ]'
            value={rawData}
            onChange={(e) => setRawData(e.target.value)}
          />
        </div>

        <div className="modal-input-box flex gap-3">
          <button className="modal-button" onClick={handleBulkAddPoints}>
            Bulk add points
          </button>

          <button className="modal-button" onClick={handleBulkAddPeriods}>
            Bulk add periods
          </button>

          <button className="modal-button" onClick={toggleModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
