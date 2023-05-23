import React from "react";
import "../../Styles/App.css";
import "./Contact.css";
import logoSmall from "../../images/logoSmall.png";

const Contact = () => {
  return (
    <>
      <img id="logo-small" src={logoSmall} alt="logo" />
      <div className="contact-container">
        <div className="form-container">
          <form
            className="form"
            form
            action="https://formsubmit.co/info@siyli-endurance-coaching.com"
            method="POST"
          >
            <label className="label" htmlFor="name">
              your name
            </label>
            <input type="text" className="inputs" name="name" required />
            <br />
            <label className="label" htmlFor="email">
              your email address
            </label>
            <input type="email" className="inputs" name="email" required />
            <br />
            <label className="label" htmlFor="textarea">
              feel free
            </label>
            <br />
            <textarea
              type="text"
              className="inputs"
              name="textarea"
              required
              rows="10"
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
