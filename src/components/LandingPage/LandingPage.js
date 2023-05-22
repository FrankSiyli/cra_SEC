import React from "react";
import "./LandingPage.css";
import logoOut from "../../images/logoOuterSilver.png";
import logoMid from "../../images/logoMidSilver.png";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-upper-container">
        <div className="landing-page-text-container">
          <h2 className="landing-text-1">
            <span className="first-word">Life</span> is good.{" "}
          </h2>
          <h2 className="landing-text-2">
            <span className="first-word">Triathlon</span> makes it better.
          </h2>
        </div>
        <div className="logo-container">
          <img id="logoOut" src={logoOut} alt="logo" />
          <img id="logoMid" src={logoMid} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
