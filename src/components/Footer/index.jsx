import React from "react";
import "./styles.css";
import FooterIconCard from "./FooterIconCard";
import Text from "../Text";
const Footer = () => {
  return (
    <div className="footer-content">
      <FooterIconCard name="dev-icon" />
      <Text size="14px">© 2024 All rights reserved</Text>
      <FooterIconCard name="inyan-icon" />
    </div>
  );
};

export default Footer;
