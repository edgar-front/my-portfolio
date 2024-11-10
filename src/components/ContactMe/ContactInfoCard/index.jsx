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
      <button onclick="myRefactor()">Copy text</button>
    </div>
  );
  function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    myFunction();
  }
};

export default ContactInfoCard;
