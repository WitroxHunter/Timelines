import React, { useRef, useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { Navigate, Link, useParams } from "react-router-dom";
import "./timelines-app.css";
import smileyIcon from "../assets/icons/smiley.webp";
import homeIcon from "../assets/icons/home.svg";

import Header from "./app-components/header";
import Canvas from "./app-components/canvas";

import { GripHorizontal } from "lucide-react";

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
      <button className="button-header" onClick={toggleMenu}>
        {props.buttonName}
      </button>

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
  const { timelineId } = useParams();
  const [timelineData, setTimelineData] = useState(null);
  console.log(timelineData);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(firestore, "users", currentUser.uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          const timeline = userData.timelines[timelineId];
          if (timeline) {
            setTimelineData(timeline);
          } else {
            console.error("No such timeline!");
          }
        } else {
          console.error("No such user document!");
        }
      });

      return () => unsubscribe();
    }
  }, [currentUser, timelineId]);

  if (!timelineData) {
    return <div>Loading timeline...</div>; // Dodać animacje ładowania ‼️‼️
  }

  if (!currentUser) {
    return <Navigate to="/Timelines/login" />;
  }

  return (
    <>
      <div className="main horizontal-gradient">
        <Header>
          <div className="header-buttons-wrapper">
            <Link to="/Timelines/app" style={{ display: "flex" }}>
              <button className="button-header">
                <img className="header-home-icon" src={homeIcon} />
              </button>
            </Link>

            <HeaderButton buttonName="File">
              <li>New file</li>
              <div className="dropdown-line-divider" />
              <li>Save file</li>
              <div className="dropdown-line-divider" />
              <li>Import Timeline</li>
              <li>Export Timeline</li>
              <div className="dropdown-line-divider" />
              <li>Export image</li>
            </HeaderButton>
            <HeaderButton buttonName="Edit">
              <li>Undo</li>
              <li>Redo</li>
              <div className="dropdown-line-divider" />
              <li>Cut</li>
              <li>Copy</li>
              <li>Paste</li>
              <div className="dropdown-line-divider" />
              <li>Find event</li>
              <div className="dropdown-line-divider" />
              <li>Change background</li>
            </HeaderButton>
            <HeaderButton buttonName="View">
              <li>Zoom In</li>
              <li>Zoom Out</li>
              <div className="dropdown-line-divider" />
              <li>Toggle Grid Lines</li>
              <li>Interval Labels</li>
              <div className="dropdown-line-divider" />
              <li>Fit to Screen</li>
              <li>Hide UI buttons</li>
              {/* <div className="dropdown-line-divider" /> */}
            </HeaderButton>
            <HeaderButton buttonName="Text">
              <li>Change font</li>
              <li>Change text size</li>
              {/* <div className="dropdown-line-divider" /> */}
            </HeaderButton>
            <HeaderButton buttonName="Colors">
              <li>Change Color Palette</li>
              <li>Add Color Palette</li>
              <div className="dropdown-line-divider" />
              <li>Background Color</li>
            </HeaderButton>
            <HeaderButton buttonName="Help">
              <li>User Guide</li>
              <li>Shortcuts</li>
              <li>About</li>
              {/* <div className="dropdown-line-divider" /> */}
            </HeaderButton>
          </div>
        </Header>

        <Canvas
          timelineData={timelineData}
          currentUser={currentUser}
          timelineId={timelineId}
        />

        <div className=" bg-card/30 px-4 py-2">
          <div className="flex items-center justify-center gap-6 text-s text-muted-foreground">
            <div className="flex items-center gap-2">
              <GripHorizontal className="w-4 h-4" />
              <span>Drag to pan</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Scroll to zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Click events for details</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimelinesApp;
