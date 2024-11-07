import React from "react";
import "./styles.css";
import Text from "../../Text";
import Icon from "../../Icon";

const ContactInfoCard = ({ text, name }) => {
  return (
    function myFunction() {
      // Get the text field
      var copyText = document.getElementById("myInput");
    
      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
    
       // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
    
    
    
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
})}
  
    

export default ContactInfoCard;
