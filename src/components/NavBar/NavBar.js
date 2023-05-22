import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/services" className="nav-button">
          Services
        </Link>
        <Link to="/about" className="nav-button">
          About
        </Link>
        <Link to="/contact" className="nav-button">
          Contact
        </Link>
      </div>
    </>
  );
};

export default NavBar;
