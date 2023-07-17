import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/App.css";
import "./Services.css";
import logoSmall from "../../images/logoSmall.png";
import bike from "../../images/bike.png";
import brutal from "../../images/theBrutal.png";
import { useTranslation } from "react-i18next";
import trainingpeaksCard from "../../images/TrainingPeaks_Product.png";
import { useLocation } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Link to="/">
        <img id="logo-small" src={logoSmall} alt="logo" />
      </Link>

      <div className="content-container">
        <div className="single-content">
          <h1>
            <span className="yellow-word">{t("servicesTitle_1_1")}</span>
            {t("servicesTitle_1_2")}
          </h1>
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
          <p>{t("servicesText_9")}</p>
          <img
            id="trainingpeaks-card"
            src={trainingpeaksCard}
            alt="trainingpeaks"
          />
          <p>{t("servicesText_10")}</p>
          <p>{t("servicesText_11")}</p>
          <p>{t("servicesText_12")}</p>
          <p>{t("servicesText_13")}</p>
          <p>{t("servicesText_14")}</p>
          <p>
            <span className="yellow-word">{t("servicesText_15")}</span>
          </p>
          <p>
            <span className="yellow-word">{t("servicesText_16")}</span>
          </p>
          <br />
          <p>150€ {t("servicesText_17")}</p>
          <p>{t("servicesText_18")}</p>
          <p>
            <span className="yellow-word">{t("servicesText_19")}</span>
          </p>
          <br />
          <p>115€ {t("servicesText_17")}</p>
          <p>{t("servicesText_20")}// swim / bike / run</p>
          <p>
            <span className="yellow-word">{t("servicesText_19")}</span>
          </p>{" "}
        </div>

        <div className="single-content">
          <div>
            <h1>
              <span className="yellow-word">1:1</span>
              {t("servicesTitle_2")}
            </h1>
            <p>swim // bike // run</p>
            <p>{t("servicesText_21")}</p>
            <p>{t("servicesText_22")}</p>
            <p>{t("servicesText_23")}</p>
            <p>75€/h</p>
            <p>{t("servicesText_24")}</p>
          </div>
          <br />
          <img id="bike" src={bike} alt="bike" />
          <br />
        </div>

        <div className="single-content">
          <div>
            <h1>
              <span className="yellow-word">{t("servicesTitle_3_1")}</span>
              {t("servicesTitle_3_2")}
            </h1>
            <p>{t("servicesText_25")}</p>
            <button className="content-button">
              <Link
                target="_blank"
                to="https://www.trainingpeaks.com/coach/siyli-endurance-coaching#trainingplans"
              >
                {t("servicesText_26")}
              </Link>
            </button>
            <p>{t("servicesText_27")}</p>
          </div>
          <br />
          <img id="the-brutal" src={brutal} alt="brutal triathlon" />
          <br />
        </div>
      </div>
    </>
  );
};

export default Services;
