import React from "react";
import "./styles.css";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import Text from "../Text";

const ContactMe = () => {
  return (
    <section className="contact-section">
      <Text
        className="contact-container"
        weight={600}
        size="22px"
        componentTag="h5"
        color="#C864C1"
      >
        Contact Me
      </Text>
      <div className="contact-content">
        <div className="contact-card-wrapper">
          <ContactInfoCard
            text="edgar.itmember@gmail.com"
            name="email-icon"
            showCopy="copy-icon"
          />

          <ContactInfoCard
            text="GitHub Page"
            name="github-icon"
            link="https://github.com/edgar-front"
            linkLabel="Visit GitHub-Account"
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
