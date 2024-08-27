import React from "react";
import "./styles.css";
import Text from "../Text";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <Text
          componentTag="h2"
          className="hero-title"
          size="3.8rem"
          weight={600}
        >
          Buliding Digital Experiences That Inspire
        </Text>
        <p>
          Passionate Frontend Developer | Transforming Ideas Into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img-wrapper">
        <div>
          <div className="first-row">
            <img
              className="react-icon"
              src="./assets/images/img01.png"
              alt=""
            />
            <img src="./assets/images/img11.jpg" alt="" />
          </div>
        </div>
        <div className="second-row">
          <img src="./assets/images/img02.png" alt="" />
          <img src="./assets/images/img03.png" alt="" />
          <img src="./assets/images/img04.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
