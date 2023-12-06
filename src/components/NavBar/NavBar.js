import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "../../Styles/App.css";
import "../../Styles/Buttons.css";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const [showMenu, setShowMenu] = useState(true);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showHamburgerButton, setShowHamburgerButton] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const handleHamburgerButtonClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  /* useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
  }, []); */

  const handleActiveStyle = (buttonId) => {
    setActiveButton(buttonId);
    setShowHamburgerMenu(false);
  };

  return (
    <>
      {/*  {showMenu ? (
        <div className="nav-bar">
          <Link
            to="/"
            className="nav-button"
            onClick={() => handleActiveStyle(1)}
            style={
              activeButton === 1 ? { scale: "1.2", rotate: "15deg" } : null
            }
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
          <div>
            <button
              className="language-button"
              type="button"
              onClick={toggleLanguage}
            >
              {currentLanguage === "de" ? (
                <span className="fi fi-gb "></span>
              ) : (
                <span className="fi fi-de "></span>
              )}
            </button>
          </div>
        </div>
      ) : ( */}
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
                      scale: "1.2",
                      rotate: "15deg",
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
                      scale: "1.2",
                      rotate: "15deg",
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
                      scale: "1.2",
                      rotate: "15deg",
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
                      scale: "1.2",
                      rotate: "15deg",
                    }
                  : null
              }
            >
              Contact
            </Link>
            <div>
              <button
                className="language-button"
                type="button"
                onClick={toggleLanguage}
              >
                {currentLanguage === "de" ? (
                  <span className="fi fi-gb "></span>
                ) : (
                  <span className="fi fi-de "></span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      {/*  )} */}
    </>
  );
};

export default NavBar;
