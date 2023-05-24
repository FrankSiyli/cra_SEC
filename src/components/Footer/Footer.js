import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-elements">
          <Link to="impressum" className="footer-button">
            Impressum
          </Link>
          <Link to="agb" className="footer-button">
            AGB
          </Link>
          <Link to="datenschutz" className="footer-button">
            Datenschutz
          </Link>
          <p>copyright</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
