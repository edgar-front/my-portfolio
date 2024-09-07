import React from "react";
import "./styles.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="edgar.itmember@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/edgar-front/my-portfolio"
          />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </section>
  );
};

export default ContactMe;
