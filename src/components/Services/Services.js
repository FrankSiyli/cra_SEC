import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/App.css";
import "./Services.css";
import union from "../../images/union.png";
import bike from "../../images/bike.png";
import { useTranslation } from "react-i18next";
import trainingpeaksCard from "../../images/TrainingPeaks_Product.png";
import { useLocation } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <div className="content-container">
        <div className="single-content">
          <h2>
            <span className="yellow-word">{t("servicesTitle_1_1")}</span>
            {t("servicesTitle_1_2")}
          </h2>
          <br />
          <p>
            {t("servicesText_1")}
            &nbsp;
            <Link
              className="target-link"
              target="_blank"
              to="https://www.trainingpeaks.com"
            >
              Trainingpeaks
            </Link>
          </p>
          <p>
            {t("servicesText_2")}
            <span className="yellow-word">{t("servicesText_3")}</span>
          </p>
          <p>
            <span className="yellow-word">{t("servicesText_4")}</span>
          </p>
          <p>
            {t("servicesText_5")}
            <span className="yellow-word">{t("servicesText_6")}</span>
          </p>
          <p>
            {t("servicesText_7")}
            <span className="yellow-word">{t("servicesText_8")}</span>
          </p>
          <span className="yellow-word">{t("servicesText_16")}</span>

          <p>{t("servicesText_9")}</p>
          <br />
          <img
            id="trainingpeaks-card"
            src={trainingpeaksCard}
            alt="trainingpeaks"
          />

          <br />
          {/* <p>150€ {t("servicesText_17")}</p> */}
          <span className="no-slots-span">Currently no free slots</span>
          <p>{t("servicesText_18")}</p>
          <p>
            <span className="yellow-word">{t("servicesText_19")}</span>
          </p>
          <br />
          {/*           <p>115€ {t("servicesText_17")}</p>
           */}
          <span className="no-slots-span">Currently no free slots</span>
          <p>{t("servicesText_20")}// swim / bike / run</p>
          <p>
            <span className="yellow-word">{t("servicesText_19")}</span>
          </p>
          <br />
        </div>

        <div className="single-content">
          <div>
            <h2>
              <span className="yellow-word">{t("servicesTitle_3_1")}</span>
              {t("servicesTitle_3_2")}
            </h2>
            <br />
            <p>{t("servicesText_25")}</p>

            <button className="content-button">
              <Link target="_blank" to="https://siyli-app.vercel.app">
                siyli-app.de
              </Link>
            </button>
            <br />
            <br />
            <img id="bike" src={bike} alt="bike" />
            <br />
          </div>
          <br />
        </div>
        <br />
        <p>All training sessions are in german and english</p>
        <img className="union" src={union} alt="english" />
        <p>if you have any questions let me know</p>
        <br />
      </div>
    </>
  );
};

export default Services;
