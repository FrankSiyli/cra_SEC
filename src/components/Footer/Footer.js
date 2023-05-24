import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = new Date().getFullYear();
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
          <p class="copy">Copyright &copy; 2022-{getYear}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
