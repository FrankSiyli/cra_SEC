import React, { useState } from "react";
import "./NavBar.css";
import "../../Styles/App.css";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("de");
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const handleHamburgerButtonClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleActiveStyle = (buttonId) => {
    setActiveButton(buttonId);
    setShowHamburgerMenu(false);
  };

  return (
    <>
      <div className={`hamburger-menu ${showHamburgerMenu ? "menu-open" : ""}`}>
        <button
          className="hamburger-button"
          onClick={handleHamburgerButtonClick}
        >
          {!showHamburgerMenu ? (
            <img className="hamburger" src={hamburger} alt="hamburger menu" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 x-hamburger-menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {showHamburgerMenu && (
          <div className="menu-list">
            <div className="nav-button-container">
              <Link
                to="/"
                className="nav-button"
                onClick={() => handleActiveStyle(1)}
                style={
                  activeButton === 1
                    ? {
                        scale: "1.2",
                        rotate: "10deg",
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
                        rotate: "10deg",
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
                        rotate: "10deg",
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
                        rotate: "10deg",
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
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
