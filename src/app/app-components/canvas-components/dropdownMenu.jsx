// DropdownMenu.js
import React, { useState, useRef, useCallback, useEffect } from "react";
import singleEventIcon from "./../../../assets/icons/pin.svg";
import multipleEventIcon from "./../../../assets/icons/calendar-event.svg";
import addIcon from "./../../../assets/icons/plus.svg";

const DropdownMenu = React.memo(({ onSingleEventClick, onLongEventClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="add-button-dropdown" ref={menuRef}>
      <button className="add-button" onClick={toggleMenu}>
        <img src={addIcon} alt="Add" />
        <div>Add</div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li
              onClick={() => {
                toggleMenu();
                onSingleEventClick();
              }}
            >
              <img src={singleEventIcon} alt="Single Event" />
              Point in time
            </li>
            <li
              onClick={() => {
                toggleMenu();
                onLongEventClick();
              }}
            >
              <img src={multipleEventIcon} alt="Long Event" />
              Period event
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});

export default DropdownMenu;
