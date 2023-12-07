import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-elements">
        <div className="footer-link-elements">
          <Link to="impressum" className="footer-button">
            Impressum
          </Link>
          <Link to="agb" className="footer-button">
            AGB
          </Link>
          <Link to="datenschutz" className="footer-button">
            Datenschutz
          </Link>
        </div>
        <p>Cookies: Google page views</p>
        <p>Copyright &copy; 2022-{getYear}</p>
      </div>
    </>
  );
};

export default Footer;
