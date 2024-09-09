import React from "react";
import "./styles.css";
import Text from "../../Text";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />
        <button>
          <Text color="#fff" size="16px" weight={400}>
            SEND
          </Text>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
