import React, { useState } from "react";
import "./styles.css";
import Text from "../Text";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <span>Time to program</span>
          {/* <img className="logo" src="./assets/images/logo.svg" alt="" /> */}
          <ul>
            <li>
              <a className="menu-item">
                <Text color="white" weight={200} componentTag="span">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="white" weight={200} componentTag="span">
                  Skills
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="white" weight={200} componentTag="span">
                  Work Experience
                </Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text color="white" weight={200} componentTag="span">
                  Contact Me
                </Text>
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <div class="material-symbols-outlined">
              <div></div>
              <div></div>
              <div></div>
              {/* {openMenu ? "close" : "menu"} */}
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
