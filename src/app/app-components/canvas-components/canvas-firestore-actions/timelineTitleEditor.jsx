import React, { useState, useRef } from "react";
import { changeTimelineName } from "../firebaseUtils";
import editIcon from "../../../../assets/icons/edit.svg";

const TimelineTitleEditor = ({ timelineTitle, setTimelineTitle, timelineData, currentUser, timelineId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef(null);

  const handleSaveTitle = () => {
    setIsEditing(false);
    if (timelineTitle !== timelineData.title) {
      changeTimelineName(timelineTitle, currentUser, timelineId);
    }
  };

  return (
    <div className="opened-timeline-file-name" onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <input
          ref={titleInputRef}
          className="edit-timeline-title-input"
          value={timelineTitle}
          onChange={(e) => setTimelineTitle(e.target.value)}
          onBlur={handleSaveTitle}
          autoFocus
        />
      ) : (
        <div>{timelineTitle}</div>
      )}
      <img src={editIcon} alt="Edit Icon" />
    </div>
  );
};

export default TimelineTitleEditor;
