import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useAuth } from "./contexts/authContext";
import { Navigate } from "react-router-dom";
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
        <div className="content">Dashboard</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
