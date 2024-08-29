import React from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const WorkExperience = () => {
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content"></div>
      {WORK_EXPERIENCE.map((item) => (
        <ExperienceCard key={item.title} details={item} />
      )
    )}
    </section>
  );
};

export default WorkExperience;
