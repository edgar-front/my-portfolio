import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
