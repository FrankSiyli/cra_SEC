import React from "react";
import "../../Styles/App.css";
import "./About.css";
import avatar from "../../images/avatar.png";
import dtu from "../../images/dtu.png";
import trainingpeaksLogo from "../../images/trainingpeaks_logo_2.png";
import union from "../../images/union.png";
import { Link } from "react-router-dom";
import deca from "../../images/deca.png";
import decaTemp from "../../images/decaTemp.png";
import decaBike from "../../images/decaBike.png";
import decaSwim from "../../images/decaSwim.png";
import decaRun from "../../images/decaRun.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <div className="content-container">
        <div className="single-content">
          <h2>
            <span className="yellow-word">Moin</span>
          </h2>
          <br />
          <p>{t("aboutText_1")}</p>
          <p>{t("aboutText_2")}</p>
          <p>
            {t("aboutText_3")}
            <span className="yellow-word">{t("aboutText_4")}</span>
            {t("aboutText_5")}
          </p>
          <br />
          <img id="avatar" src={avatar} alt="itsme" />
          <br />
          <p>
            {t("aboutText_6")}
            <span className="yellow-word">DTU</span>
            {t("aboutText_7")}
            <span className="yellow-word">Trainingpeaks</span>
            {t("aboutText_8")}
          </p>
          <br />
          <img className="about-logos" src={dtu} alt="dtu" />
          <img
            className="about-logos"
            src={trainingpeaksLogo}
            alt="trainingpeaks-logo"
          />
          <br />
        </div>

        <div className="single-content">
          <br />
          <p>
            {t("aboutText_9")}
            <span className="yellow-word">{t("aboutText_10")}</span>{" "}
            {t("aboutText_11")}
          </p>
          <p>
            {t("aboutText_12")}
            <span className="yellow-word">Finish</span>
            {t("aboutText_13")}
            <br />
            <Link
              className="target-link"
              to="https://www.youtube.com/watch?v=hXKsAClUzMI"
              target="_blank"
            >
              DecaUK
            </Link>
          </p>
          <br />
          <br />
          <img id="deca" src={deca} alt="deca uk" />
          <br />
          <br />
          <p>
            <span>
              10x
              {t("aboutText_14")}
            </span>
          </p>
          <p>
            <span className="yellow-word">38km</span> Swim -{" "}
            <span className="yellow-word">1800km</span> Bike -{" "}
            <span className="yellow-word">422km</span> Run
          </p>

          <br />
          <div className="temp-container">
            <img id="decaTemp" src={decaTemp} alt="deca uk" />
            <span id="snowman">⛄️</span>
          </div>
          <br />
          <div className="deca-image-container">
            <img id="decaSwim" src={decaSwim} alt="deca uk" />
            <img id="decaBike" src={decaBike} alt="deca uk" />
            <img id="decaRun" src={decaRun} alt="deca uk" />
          </div>
          <br />
          <br />
        </div>

        <div className="single-content">
          <br />
          <p>
            {t("aboutText_15")}
            <span className="yellow-word">{t("aboutText_16")}</span>
          </p>
          <p>
            {t("aboutText_17")}
            <span className="yellow-word">{t("aboutText_18")}</span>
          </p>
          <p>
            {t("aboutText_19")}
            <span className="yellow-word">{t("aboutText_20")}</span>
            {t("aboutText_21")}
          </p>
          <p>
            {t("aboutText_22")}
            <span className="yellow-word">{t("aboutText_23")}</span>
            {t("aboutText_24")}
          </p>
          <p>{t("aboutText_25")}</p>
          <p>
            <span className="yellow-word">{t("aboutText_26")}</span>
            {t("aboutText_27")}
          </p>

          <p>{t("aboutText_28")}</p>
          <br />
        </div>

        <div className="single-content">
          <br />
          <p>All training sessions are in german and english</p>
          <img className="union" src={union} alt="english" />
          <p>if you have any questions let me know</p>
          <br />
        </div>
      </div>
    </>
  );
};

export default About;
