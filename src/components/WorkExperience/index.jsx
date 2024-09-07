import React, { useRef } from "react";
import "./styles.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";
import Icon from "../Icon";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToSHow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <Icon
          className={"arrow-right"}
          name="chevron-right"
          onClick={slideRight}
          size={36}
          color="#6751b9"
        />

        <Icon
          className={"arrow-left"}
          name="chevron-left"
          onClick={slideLeft}
          size={36}
          color="#6751b9"
        />
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
