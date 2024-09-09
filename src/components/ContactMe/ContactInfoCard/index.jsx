import React from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const ContactInfoCard = ({ text, name }) => {
  return (
    <div className="contact-details-card">
      <Icon
        alt={text}
        className={"email"}
        size={64}
        color="white"
        name={name}
      />

      <Text>{text}</Text>
    </div>
  );
};

export default ContactInfoCard;
