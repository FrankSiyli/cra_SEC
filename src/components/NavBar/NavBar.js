import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "../../Styles/App.css";
import "../../Styles/Buttons.css";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showHamburger, setShowHamburger] = useState(false);

  const handleHamburgerClick = () => {
    setShowHamburger(!showHamburger);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMenu(false);
        setShowHamburger(false);
      } else {
        setShowMenu(true);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const showHamburgerMenu = screenWidth <= 768;

      setShowMenu(!showHamburgerMenu);
      setShowHamburger(showHamburgerMenu && showHamburger);

      if (showHamburgerMenu) {
        document.removeEventListener("scroll", handleScroll);
      } else {
        document.addEventListener("scroll", handleScroll);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showHamburger]);

  return (
    <>
      {showMenu ? (
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
      ) : (
        <div className="hamburger-menu">
          <button className="hamburger-button" onClick={handleHamburgerClick}>
            <img id="hamburger" src={hamburger} alt="hamburger menu" />
          </button>
          {showHamburger && (
            <div className="menu-list">
              <Link
                to="/"
                className="nav-button"
                onClick={handleHamburgerClick}
              >
                Home
              </Link>

              <Link
                to="/services"
                className="nav-button"
                onClick={handleHamburgerClick}
              >
                Services
              </Link>

              <Link
                to="/about"
                className="nav-button"
                onClick={handleHamburgerClick}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="nav-button"
                onClick={handleHamburgerClick}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
