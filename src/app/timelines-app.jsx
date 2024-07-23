import React, { useRef, useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the import based on your file structure
import { Navigate, Link } from "react-router-dom";
import "./timelines-app.css";
import smileyIcon from "../assets/icons/smiley.webp";

import Header from "./app-components/header";
import Canvas from "./app-components/canvas";

const HeaderButton = (props, { children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-button-dropdown" ref={menuRef}>
      <button onClick={toggleMenu}>{props.buttonName}</button>

      {isOpen && (
        <div className="header-dropdown-menu">
          <ul>{props.children}</ul>
        </div>
      )}
    </div>
  );
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

function TimelinesApp() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Timelines/login" />;
  }

  return (
    <>
      <div className="main horizontal-gradient">
        <Header>
          <div className="header-option-buttons">
            {/* Witaj{" "}
            <label className="username">
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </label> */}
            <Link to="/Timelines/app">
              <button>Dashboard</button>
            </Link>

            <HeaderButton buttonName="File">
              <li>Open file</li>
              <li>Open recent</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <li>Save file as</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
              <div className="dropdown-line-divider" />
              <li>Close file</li>
              <div className="dropdown-line-divider" />
              <li>
                <img
                  src={smileyIcon}
                  style={{ width: 16, filter: "grayscale(1) contrast(3)" }}
                />
                &nbsp; Wpierdol 2
              </li>
            </HeaderButton>
            <HeaderButton buttonName="Edit">
              <li>Open file</li>
              <li>Open recent</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <li>Save file as</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
              <div className="dropdown-line-divider" />
              <li>Close file</li>
            </HeaderButton>
            <HeaderButton buttonName="View">
              <li>Open file</li>
              <li>Open recent</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <li>Save file as</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
              <div className="dropdown-line-divider" />
              <li>Close file</li>
            </HeaderButton>
            <HeaderButton buttonName="Text">
              <li>Open file</li>
              <li>Open recent</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <li>Save file as</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
              <div className="dropdown-line-divider" />
              <li>Close file</li>
            </HeaderButton>
            <HeaderButton buttonName="Colors">
              <li>Open file</li>
              <li>Open recent</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <li>Save file as</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
              <div className="dropdown-line-divider" />
              <li>Close file</li>
            </HeaderButton>
          </div>

          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </Header>

        <Canvas />
      </div>
    </>
  );
}

export default TimelinesApp;
