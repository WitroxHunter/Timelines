import React, { useState, useRef } from "react";
import { changeTimelineName } from "../canvas-firestore-actions/firebaseUtils";
import editIcon from "../../../../assets/icons/edit.svg";

const TimelineTitleEditor = ({
  timelineTitle,
  setTimelineTitle,
  timelineData,
  currentUser,
  timelineId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef(null);

  const handleSaveTitle = () => {
    setIsEditing(false);
    if (timelineTitle !== timelineData.title) {
      changeTimelineName(timelineTitle, currentUser, timelineId);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Ograniczamy liczbę znaków do 20
    if (value.length <= 30) {
      setTimelineTitle(value);
    }
  };

  return (
    <div
      className="opened-timeline-file-name"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <input
          ref={titleInputRef}
          className="edit-timeline-title-input"
          value={timelineTitle}
          onChange={handleInputChange}
          onBlur={handleSaveTitle}
          autoFocus
          style={{ width: `${timelineTitle.length}ch` }} // Dynamiczna szerokość inputu
        />
      ) : (
        <div className="edit-timeline-title-input">{timelineTitle}</div>
      )}
      <img src={editIcon} alt="Edit Icon" />
    </div>
  );
};

export default TimelineTitleEditor;
