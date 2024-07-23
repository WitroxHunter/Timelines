import React from "react";
import { useAuth } from "../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the import based on your file structure
import { Navigate, Link } from "react-router-dom";
import "./timelines-app.css";

import Header from "./app-components/header";
import Canvas from "./app-components/canvas";

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
      <div className="main">
        <Header>
          <div>
            {/* Witaj{" "}
            <label className="username">
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </label> */}
            <Link to="/Timelines/app">
              <button>Dashboard</button>
            </Link>

            <button>File</button>
            <button>Edit</button>
            <button>View</button>
            <button>Text</button>
            <button>Colors</button>
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
