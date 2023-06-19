import React from "react";
import "./LandingPage.css";
import "../../Styles/App.css";
import logoOut from "../../images/logoOuterMix.png";
import logoMid from "../../images/logoMidSilver.png";
import Footer from "../Footer/Footer";
import CookieConsent from "react-cookie-consent";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 1 }}
    >
      <div className="landing-page-upper-container">
        <div className="landing-page-text-container">
          <h1 className="landing-text-1">
            <span className="yellow-word">LIFE</span> is good.{" "}
          </h1>
          <h1 className="landing-text-2">
            <span className="yellow-word">TRIATHLON</span> makes it better.
          </h1>
        </div>
        <div className="logo-container">
          <img id="logoOut" src={logoOut} alt="logo" />
          <img id="logoMid" src={logoMid} alt="logo" />
        </div>
      </div>
      <Footer />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </motion.main>
  );
};

export default LandingPage;
