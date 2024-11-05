import React from "react";
import "./styles.css";
import Text from "../../Text";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt="{title}" />
      </div>
      <Text>{title}</Text>
    </div>
  );
};

export default SkillCard;
