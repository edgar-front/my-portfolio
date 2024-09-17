import React from "react";
import "./styles.css";
import Text from "../../Text";
import { BurgerButton } from "../../BurgerButton";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <BurgerButton isOpen={true} onClick={toggleMenu} />
        <div className="mobile-menu-container">
          <img className="logo" src="assets/images/logo.svg" alt="" />
          <ul>
            <li>
              <a className="menu-item">
                <Text size="18px">Home</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text size="18px">Skills</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text size="18px">Work Experience</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text size="18px">Contact Me</Text>
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              <Text size="18px">Hire Me</Text>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
