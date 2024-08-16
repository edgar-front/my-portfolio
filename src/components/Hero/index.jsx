import React from "react";
import "./styles.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Buliding Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas Into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
        {/* <img className="hero-pic" src="./assets/images/logo.svg" alt="" /> */}
        </div>
        <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
      </div>
    </section>
  );
};
export default Hero;
