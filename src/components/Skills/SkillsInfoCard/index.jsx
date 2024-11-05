import React from "react";
import "./styles.css";
import Text from "../../Text";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <Text componentTag="h6">{heading}</Text>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <Text componentTag="p">{item.skill}</Text>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
