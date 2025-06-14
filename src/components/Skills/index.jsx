import React, { useState } from "react";
import "./styles.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard";
import SkillsInfoCard from "./SkillsInfoCard";
import Text from "../Text";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section>
      <Text
        size="var(--size-large)"
        componentTag="h5"
        weight="500"
        className="skills-container"
        color="#C864C1"
      >
        Technical Proficiency
      </Text>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
