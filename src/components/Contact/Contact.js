import React from "react";
import "../../Styles/App.css";
import "./Contact.css";
import logoSmall from "../../images/logoSmall.png";
import Overlay from "../Overlay/Overlay";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Overlay />

      <img id="logo-small" src={logoSmall} alt="logo" />

      <div className="contact-container">
        <div className="form-container">
          <form
            className="form"
            action="https://formsubmit.co/info@siyli-endurance-coaching.com"
            method="POST"
          >
            <h4 className="label">your name</h4>
            <input type="text" className="inputs" name="name" required />

            <h4 className="label">your email address</h4>
            <input type="email" className="inputs" name="email" required />
            <br />
            <h4 className="label">feel free</h4>

            <textarea
              type="text"
              className="inputs"
              name="textarea"
              required
              rows="5"
            />

            <button className="content-button" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
