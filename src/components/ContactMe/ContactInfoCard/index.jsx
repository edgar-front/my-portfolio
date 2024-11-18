import React, { useState } from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const ContactInfoCard = ({ text, name, link, linkLabel, showCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("edgar.itmember@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="contact-details-card">
      <Icon alt={text} className="email" size={64} color="white" name={name} />
      <button className="copy-button" onClick={handleCopy}>
        {showCopy && (
          <Icon
            alt={text}
            className="copy"
            size={32}
            color="white"
            name="copy-icon"
          />
        )}
      </button>
      {isCopied && <p className="copy-message">Text Copied!</p>}{" "}
      {/* Display message */}
      <Text>{text}</Text>
      <a target="_blank" rel="noreferrer" href={link}>
        {linkLabel}
      </a>
    </div>
  );
};

export default ContactInfoCard;
