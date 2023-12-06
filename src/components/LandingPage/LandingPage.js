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
          marginLeft: "25%",
          background: "#0b243a",
          textAlign: "center",
          fontSize: "1rem",
          maxWidth: "50%",
          borderRadius: "5px",
          marginBottom: "1%",
          border: "#00a3b1 solid 1px",
        }}
        buttonStyle={{
          background: "#00a3b1",
          color: "#f5f4f5",
          borderRadius: "5px",
          fontSize: "1.2rem",
        }}
        buttonText="OK"
      >
        <p style={{ maxWidth: "50%", marginLeft: "25%" }}>
          {" "}
          Executed google parameter: page views
        </p>
      </CookieConsent>
    </>
  );
};

export default LandingPage;
