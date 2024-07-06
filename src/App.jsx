import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
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
