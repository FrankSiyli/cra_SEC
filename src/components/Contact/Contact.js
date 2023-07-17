import React from "react";
import "../../Styles/App.css";
import "./Contact.css";
import logoSmall from "../../images/logoSmall.png";
import Overlay from "../Overlay/Overlay";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/">
        <img id="logo-small" src={logoSmall} alt="logo" />
      </Link>

      <Overlay />

      <div className="content-container">
        <div className="form-container">
          <form
            className="form"
            action="https://formsubmit.co/info@siyli-endurance-coaching.com"
            method="POST"
          >
            <p className="label">Your name</p>
            <input type="text" className="inputs" name="name" required />

            <p className="label">Your email</p>
            <input type="email" className="inputs" name="email" required />
            <br />
            <p className="label">Feel free</p>

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
    </>
  );
};

export default Contact;
