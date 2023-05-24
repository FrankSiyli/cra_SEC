import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "../../Styles/App.css";
import "../../Styles/Buttons.css";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showHamburgerButton, setShowHamburgerButton] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const handleHamburgerButtonClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMenu(false);
        setShowHamburgerButton(true);
        setShowHamburgerMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const showHamburgerMenu = screenWidth <= 768 || screenHeight <= 500;
      const showHamburgerButton = screenWidth <= 768 || screenHeight <= 500;

      setShowMenu(!showHamburgerButton);
      setShowHamburgerButton(showHamburgerButton);
      setShowHamburgerMenu(false);

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
  }, []);

  const handleActiveStyle = (buttonId) => {
    setActiveButton(buttonId);
    setShowHamburgerMenu(false);
  };
  return (
    <>
      {showMenu ? (
        <div className="nav-bar">
          <Link
            to="/"
            className="nav-button"
            onClick={() => handleActiveStyle(1)}
            style={activeButton === 1 ? { scale: "1.2" } : null}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-button"
            onClick={() => handleActiveStyle(2)}
            style={
              activeButton === 2 ? { scale: "1.2", rotate: "15deg" } : null
            }
          >
            Services
          </Link>
          <Link
            to="/about"
            className="nav-button"
            onClick={() => handleActiveStyle(3)}
            style={
              activeButton === 3 ? { scale: "1.2", rotate: "15deg" } : null
            }
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-button"
            onClick={() => handleActiveStyle(4)}
            style={
              activeButton === 4 ? { scale: "1.2", rotate: "15deg" } : null
            }
          >
            Contact
          </Link>
        </div>
      ) : (
        <div className="hamburger-menu">
          <button
            className="hamburger-button"
            onClick={handleHamburgerButtonClick}
          >
            <img id="hamburger" src={hamburger} alt="hamburger menu" />
          </button>
          {showHamburgerMenu && (
            <div className="menu-list">
              <Link
                to="/"
                className="nav-button"
                onClick={() => handleActiveStyle(1)}
                style={
                  activeButton === 1
                    ? {
                        textDecoration: "underline",
                        scale: "1.2",
                        textDecorationColor: "var(--silver)",
                      }
                    : null
                }
              >
                Home
              </Link>

              <Link
                to="/services"
                className="nav-button"
                onClick={() => handleActiveStyle(2)}
                style={
                  activeButton === 2
                    ? {
                        textDecoration: "underline",
                        scale: "1.2",
                        textDecorationColor: "var(--silver)",
                      }
                    : null
                }
              >
                Services
              </Link>

              <Link
                to="/about"
                className="nav-button"
                onClick={() => handleActiveStyle(3)}
                style={
                  activeButton === 3
                    ? {
                        textDecoration: "underline",
                        scale: "1.2",
                        textDecorationColor: "var(--silver)",
                      }
                    : null
                }
              >
                About
              </Link>

              <Link
                to="/contact"
                className="nav-button"
                onClick={() => handleActiveStyle(4)}
                style={
                  activeButton === 4
                    ? {
                        textDecoration: "underline",
                        scale: "1.2",
                        textDecorationColor: "var(--silver)",
                      }
                    : null
                }
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
