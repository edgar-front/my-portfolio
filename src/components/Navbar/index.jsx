import React, { useState } from "react";
import "./styles.css";
import Text from "../Text";
import { BurgerButton } from "../BurgerButton";
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

          <ul>
            <li>
              <a className="menu-item">
                <Text componentTag="span">Home</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text componentTag="span">Skills</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text componentTag="span">Work Experience</Text>
              </a>
            </li>
            <li>
              <a className="menu-item">
                <Text componentTag="span">Contact Me</Text>
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              <Text weight={500} componentTag="span">
                Hire Me
              </Text>
            </button>
          </ul>

          <BurgerButton isOpen={false} onClick={toggleMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
