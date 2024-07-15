import React from "react";
import { useAuth } from "../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the import based on your file structure
import { Navigate } from "react-router-dom";
import "./timelines-app.css";

import Header from "./app-components/header";
import Canvas from "./app-components/canvas";

function TimelinesApp() {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (!currentUser) {
    // Redirect to login page if not logged in
    return <Navigate to="/Timelines/login" />;
  }

  return (
    <>
      <div className="main">
        <Header />
        <Canvas />
        <br />
        Witaj{" "}
        {currentUser.displayName ? currentUser.displayName : currentUser.email}
        <br />
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
}

export default TimelinesApp;
