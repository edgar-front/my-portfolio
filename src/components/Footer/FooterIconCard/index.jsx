import React from "react";
import "./styles.css";
import Icon from "../../Icon";

const FooterIconCard = ({ name }) => {
  return (
    <Icon className={"footer-icons"} size={64} color="white" name={name} />
  );
};

export default FooterIconCard;
