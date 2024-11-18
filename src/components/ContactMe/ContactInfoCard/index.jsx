import React from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const ContactInfoCard = ({ text, name, link, linkLabel, showCopy }) => {
  return (
    <div className="contact-details-card">
      <Icon
        alt={text}
        className={"email"}
        size={64}
        color="white"
        name={name}
      />

      <button className="copy-button" onclick="copyContent()">
        <Icon
          alt={text}
          className={"copy"}
          size={32}
          color="white"
          name={"copy-icon"}
        />
      </button>

      <Text>{text}</Text>

      <a target="_blank" rel="noreferrer" href={link}>
        {linkLabel}
      </a>
    </div>
  );
};

export default ContactInfoCard;
