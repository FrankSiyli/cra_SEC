import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/App.css";
import "./Services.css";
import logoSmall from "../../images/logoSmall.png";

import trainingpeaksCard from "../../images/TrainingPeaks_Product.png";

const Services = () => {
  return (
    <>
      <img id="logo-small" src={logoSmall} alt="logo" />

      <div className="content-container">
        <div className="single-content">
          <h1>
            <span className="yellow-word">Trainingsplan</span>erstellung
          </h1>
          <p>
            wöchentlicher Trainingsplan auf der professionellen Plattform von
            <Link
              className="target-link"
              target="_blank"
              to="https://www.trainingpeaks.com"
            >
              Trainingpeaks
            </Link>
          </p>
          <p>
            angepasst an dich und{" "}
            <span className="yellow-word">dein Leben</span>
          </p>
          <p>
            <span className="yellow-word">unbegrenzte Kontaktmöglichkeit</span>
          </p>
          <p>
            auf Wunsch{" "}
            <span className="yellow-word">zyklusbasiertes Training</span>
          </p>
          <p>
            Unterstützung bei{" "}
            <span className="yellow-word">
              Zielsetzungen, Materialauswahl und Ernährung
            </span>
          </p>
          <p>monatlich kündbar</p>
          <img
            id="trainingpeaks-card"
            src={trainingpeaksCard}
            alt="trainingpeaks"
          />
          <p>
            Schwimm- Rad- und Laufeinheiten in abwechslungsreichen Intensitäten
            und Umfängen
          </p>
          <p>beschriebene Stabilisationseinheiten</p>
          <p>Yogaeinheiten</p>
          <p>
            weitere Regenerationseinheiten mit der Faszienrolle und dem
            Theraband
          </p>
          <p>detaillierte Wettkampfvorbereitung</p>
          <p>
            <span className="yellow-word">Leistungstests</span>
          </p>
          <p>
            <span className="yellow-word">wöchentliches Feedback</span>
          </p>
          <br />
          <p>150€ mtl.</p>
          <p>für Triathlon-coaching</p>
          <p>
            <span className="yellow-word">
              inklusive Trainingpeaks Premium account
            </span>
          </p>
          <br />
          <p>115€ mtl.</p>
          <p>für Einzelsport-coaching // swim / bike / run</p>
          <p>
            <span className="yellow-word">
              inklusive Trainingpeaks Premium account
            </span>
          </p>{" "}
        </div>

        <div className="single-content">
          <div>
            <h1>
              <span className="yellow-word">1:1</span> Coachingstunde
            </h1>
            <p>swim // bike // run</p>
            <p>an einem Ort deiner Wahl oder per Videocall</p>
            <p>Technikanalyse</p>
            <p>Tipps und Tricks</p>
            <p>75€/h</p>
            <p>zzgl. Anfahrt und Eintritt</p>
          </div>
        </div>

        <div className="single-content">
          <div>
            <h1>
              <span className="yellow-word">Statische</span> Trainingspläne
            </h1>
            <p>
              Falls dir ein statischer Plan ausreicht schau gern mal in meine
              Trainingsplanbibliothek.
            </p>
            <button className="content-button">
              <Link
                target="_blank"
                to="https://www.trainingpeaks.com/coach/siyli-endurance-coaching#trainingplans"
              >
                Trainingsplanbibliothek bei Trainingpeaks
              </Link>
            </button>
            <p>
              Der Trainingpeaks Basis-account ist für dich kostenlos mit dabei,
              so dass du sofort starten kannst.
            </p>
            <p>
              Falls du einen statischen Plan zur Vorbereitung auf ein Event
              benötigst (1-3 Monate) schreibe mir gern eine Nachricht.
            </p>
            <p>
              Trainingpeaks benötigt für die Berechnung deiner
              Trainingseinheiten entweder deinen Maximalpuls oder deinen
              Schwellenwert.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
