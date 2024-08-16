import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
