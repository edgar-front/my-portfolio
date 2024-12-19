import React from "react";
import "./styles.css";
import Text from "../Text";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <Text weight={600} componentTag="h2" className="hero-title">
          Buliding Digital Experiences That Inspire
        </Text>
        <Text className="hero-subtitle" componentTag="p">
          Passionate Frontend Developer | Transforming Ideas Into Seamless and
          Visually Stunning Web Solutions
        </Text>
      </div>

      <div className="hero-img-wrapper">
        <div>
          <div className="first-row">
            <img className="tool-icon" src="./assets/images/img01.png" alt="" />
            <div
              className="hero-img-container"
              role="img"
              aria-label="Hero section"
            ></div>
          </div>
        </div>
        <div className="second-row">
          <img className="tool-icon" src="./assets/images/img02.png" alt="" />
          <img className="tool-icon" src="./assets/images/img03.png" alt="" />
          <img className="tool-icon" src="./assets/images/img04.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
