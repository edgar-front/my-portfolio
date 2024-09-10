import React from "react";
import "./styles.css";
import FooterIconCard from "./FooterIconCard";

const Footer = () => {
  return (
    <div className="footer-content">
      <FooterIconCard name="dev-icon" />
      <FooterIconCard name="inyan-icon" />
    </div>
  );
};

export default Footer;
