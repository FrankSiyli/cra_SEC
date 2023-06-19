import React from "react";
import "../../Styles/App.css";
import "./Contact.css";
import logoSmall from "../../images/logoSmall.png";
import Overlay from "../Overlay/Overlay";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  return (
    <>
      <img id="logo-small" src={logoSmall} alt="logo" />
      <motion.main
        className="main__container"
        key={location.contact}
        initial={{ x: 300, opacity: 1 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        }}
        exit={{ x: 300, opacity: 0 }}
      >
        <Overlay />

        <div className="content-container">
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
    </>
  );
};

export default Contact;
