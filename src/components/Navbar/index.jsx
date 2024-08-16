import React from "react";
import "./styles.css";
import Text from "../Text";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <span>Time to program</span>
          {/* <img className="logo" src="./assets/images/logo.svg" alt="" /> */}
          <ul>
            <li>
              <a className="menu-item">
                <Text color="blue" weight={300} componentTag="span">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="orange" weight={300} componentTag="span">
                  Skills
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="red" weight={300} componentTag="span">
                  Work Experience
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="green" weight={300} componentTag="span">
                  Contact Me
                </Text>
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button class="menu-btn" onClick={() => {}}>
            <div class="material-symbols-outlined">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
