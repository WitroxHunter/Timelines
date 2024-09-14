import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useAuth } from "./contexts/authContext";
import { Navigate } from "react-router-dom";

import Logo from "./assets/images/Logo.png";
import "./App.css";

function App() {
  const { userLoggedIn } = useAuth();
  if (userLoggedIn) {
    return <Navigate to="/Timelines/app" />;
  }

  return (
    <>
      <div className="main">
        <Header />
        <div className="content">
          <p>
            <h1>
              <img src={Logo} style={{ width: 64 }} /> <b>Lifelines</b>
            </h1>
            <p>
              <p>
                Timelines is a versatile mobile and web application designed to
                help you create detailed timelines for any purpose.
              </p>
              <p>
                Whether you're planning a project, documenting historical
                events, or organizing personal milestones.
              </p>
              <p>
                Timelines offers a user-friendly interface and robust features
                to bring your chronological data to life.
              </p>
            </p>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
