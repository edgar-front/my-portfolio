import React from "react";
import "./styles.css";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import Text from "../Text";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <Text
        className="container-text"
        weight={500}
        size="24px"
        componentTag="h5"
      >
        Contact Me
      </Text>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard text="edgar.itmember@gmail.com" name="email-icon" />
          <ContactInfoCard
            text="https://github.com/edgar-front/my-portfolio"
            name="github-icon"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
