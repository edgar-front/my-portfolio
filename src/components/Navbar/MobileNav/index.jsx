import React from "react";
import "./styles.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="assets/images/logo.svg" alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
