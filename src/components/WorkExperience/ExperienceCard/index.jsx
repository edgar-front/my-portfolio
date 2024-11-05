import React from "react";
import "./styles.css";
import Text from "../../Text";
const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <Text componentTag="h5">{details.title}</Text>

      <div className="work-duration">{details.date}</div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item} className="list-item">
            <Text size="14px">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
