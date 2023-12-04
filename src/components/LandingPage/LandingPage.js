import React from "react";
import "./LandingPage.css";
import "../../Styles/App.css";
import Footer from "../Footer/Footer";
import CookieConsent from "react-cookie-consent";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-upper-container">
        <div className="landing-page-text-container">
          <h1 className="landing-text-1">
            <span className="yellow-word">LIFE</span> is good.{" "}
          </h1>
          <h1 className="landing-text-2">
            <span className="yellow-word">TRIATHLON</span> makes it better.
          </h1>
        </div>
      </div>
      <Footer />
      <CookieConsent
        acceptOnScroll="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f4f5",
          background: "#0b243a",
          textAlign: "center",
          fontSize: "1rem",
        }}
        buttonStyle={{
          background: "#00a3b1",
          color: "#1d1e22",
          borderRadius: "5px",
          fontSize: "1.2rem",
        }}
        buttonText="OK"
      >
        Executed google parameter: page views
      </CookieConsent>
    </>
  );
};

export default LandingPage;
