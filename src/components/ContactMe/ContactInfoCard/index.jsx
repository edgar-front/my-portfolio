import React from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const ContactInfoCard = ({ text, name, link, linkLabel, showCopy }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("edgar.itmember@gmail.com")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="contact-details-card">
      <Icon
        alt={text}
        className={"email"}
        size={64}
        color="white"
        name={name}
      />

      <button className="copy-button" onClick={handleCopy}>
        {showCopy && (
          <Icon
            alt={text}
            className={"copy"}
            size={32}
            color="white"
            name={"copy-icon"}
          />
        )}
      </button>

      <Text>{text}</Text>

      <a target="_blank" rel="noreferrer" href={link}>
        {linkLabel}
      </a>
    </div>
  );
};

export default ContactInfoCard;
