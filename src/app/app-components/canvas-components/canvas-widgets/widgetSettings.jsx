import React, { useState } from "react";
import "../../../timelines-app.css";
import SettingsIcon from "../../../../assets/icons/settings-2.svg";
import { SearchWidget } from "./widgetSearch";

export const SettingsWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
            <button className="modal-close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
