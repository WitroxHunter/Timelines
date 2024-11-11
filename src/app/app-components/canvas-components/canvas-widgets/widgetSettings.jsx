import React, { useState, useEffect } from "react";
import "../../../timelines-app.css";
import SettingsIcon from "../../../../assets/icons/settings-2.svg";
import { SearchWidget } from "./widgetSearch";
import { updateUserPreferences } from "../canvas-firestore-actions/firebaseUtils"; // import funkcji zapisującej i pobierającej ustawienia

export const SettingsWidget = ({ currentUser, timelineId, timelineData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickMarks, setTickMarks] = useState("month"); // Domyślna wartość, zmieniona po załadowaniu
  const [dateBoxFormat, setDateBoxFormat] = useState("year"); // Domyślna wartość, zmieniona po załadowaniu

  useEffect(() => {
    setTickMarks(timelineData.preferences.tickmarks || "month"); // Ustaw domyślnie "month", jeśli nie ma wartości
    setDateBoxFormat(timelineData.preferences.datebox || "year");
  }, []);

  

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleTickMarksChange = async (e) => {
    const newTickMarks = e.target.value;
    setTickMarks(newTickMarks);
    await updateUserPreferences(currentUser, timelineId, "tickmarks", newTickMarks);
  };

  const handleDateBoxFormatChange = async (e) => {
    const newDateBoxFormat = e.target.value;
    setDateBoxFormat(newDateBoxFormat);
    await updateUserPreferences(currentUser, timelineId, "datebox", newDateBoxFormat);
  };

  return (
    <div className="settings-widget-box">
      <SearchWidget />
      <div className="settings-widget" onClick={toggleModal}>
        <img src={SettingsIcon} className="settings-icon" alt="Settings" />
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Settings</h2>
            <label>
              Tick marks:
              <select value={tickMarks} onChange={handleTickMarksChange}>
                <option value="day">day</option>
                <option value="week">week</option>
                <option value="month">month</option>
                <option value="year">year</option>
                <option value="without tickmarks">without tickmarks</option>
              </select>
            </label>
            <br />
            <label>
              Date box format:
              <select value={dateBoxFormat} onChange={handleDateBoxFormatChange}>
                <option value="year">year</option>
                <option value="dd-mm-yyyy">dd-mm-yyyy</option>
                <option value="mm-dd-yyyy">mm-dd-yyyy</option>
                <option value="mm-yyyy">mm-yyyy</option>
              </select>
            </label>
            <button className="modal-close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
