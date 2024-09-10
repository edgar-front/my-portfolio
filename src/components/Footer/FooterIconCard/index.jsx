import React from "react";
import "./styles.css";
import Icon from "../../Icon";

const FooterIconCard = ({ name }) => {
  return (
    <div className="footer-details-card">
      <Icon className={"dev"} size={64} color="white" name={name} />
    </div>
  );
};

export default FooterIconCard;
