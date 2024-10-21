import React from "react";
import "./styles.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      size="16px"
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt="{title}" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
