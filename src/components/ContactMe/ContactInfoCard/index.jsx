import React, { useState, useEffect } from "react";
import Text from "../../Text";
import Icon from "../../Icon";
import "./styles.css";

let timeoutId;

const ContactInfoCard = ({ text, name, link, showCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        timeoutId = setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCopy(e);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`contact-details-card ${link ? "pointer" : ""}`}
      onClick={handleCardClick}
      tabIndex={link ? 0 : -1}
      role={link ? "link" : "article"}
      aria-label={link ? `Open ${text} link` : text}
    >
      <Icon alt={text} className="email" size={64} color="white" name={name} />
      <div className="text-wrapper">
        <Text>{text}</Text>
        {showCopy && (
          <div
            className={`copy-icon-wrapper ${isCopied ? "copied" : ""}`}
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Copy to clipboard"
          >
            <Icon
              alt="Copy to clipboard"
              size={32}
              color="white"
              name="copy-icon"
            />
            {isCopied && <div className="tooltip">Copied!</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfoCard;
