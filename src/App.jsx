import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
