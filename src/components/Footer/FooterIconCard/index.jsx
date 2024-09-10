import React from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const FooterIconCard = ({ name }) => {
  return (
    <div className="footer-details-card">
      <Icon className={"dev"} size={64} color="black" name={name} />
      <Text size="14px">& 2024 Time to Program,Happy Coding</Text>
    </div>
  );
};

export default FooterIconCard;
