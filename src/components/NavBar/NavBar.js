import React, { useState } from "react";
import "./NavBar.css";
import "../../Styles/App.css";
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

  const [activeButton, setActiveButton] = useState(1);
  const [showNavBar, setShowNavBar] = useState("nav-bar-not-active");
  const handleHamburgerButtonClick = () => {
    const navBarToggle =
      showNavBar === "nav-bar-not-active"
        ? "nav-bar-active"
        : "nav-bar-not-active";
    setShowNavBar(navBarToggle);
  };

  const handleActiveStyle = (buttonId) => {
    setActiveButton(buttonId);
    setShowNavBar("nav-bar-not-active");
  };

  return (
    <>
      <div>
        <button
          className="hamburger-button"
          onClick={handleHamburgerButtonClick}
        >
          {showNavBar === "nav-bar-not-active" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hamburger-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hamburger-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {showNavBar && (
          <div className={showNavBar}>
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
                        color: "#00a3b1",
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
                        color: "#00a3b1",
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
                        color: "#00a3b1",
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
                        color: "#00a3b1",
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
