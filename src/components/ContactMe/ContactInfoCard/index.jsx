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
      <Icon
        alt={text}
        className={"copy"}
        size={64}
        color="white"
        name={"copy-icon"}
      />

      <Text>{text}</Text>
      <a href="https://github.com/edgar-front" target="_blank" rel="noreferrer">
        Visit myGithub
      </a>
      <a
        href="https://mail.google.com/mail/u/3/#inbox"
        target="_blank"
        rel="noreferrer"
      >
        Visit myGmail-Account
      </a>
    </div>
  );
};

export default ContactInfoCard;
