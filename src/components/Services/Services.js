import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="content">
        <h1 id="Trainingsplanerstellung">Trainingsplanerstellung</h1>
        <p>
          wöchentlicher Trainingsplan auf der professionellen Plattform von
          Trainingpeaks
        </p>
        <p>angepasst an dich und dein Leben</p>
        <p>unbegrenzte Kontaktmöglichkeit</p>
        <p>auf Wunsch zyklusbasiertes Training</p>
        <p>Unterstützung bei Zielsetzungen, Materialauswahl und Ernährung</p>
        <p>monatlich kündbar</p>
        <p>
          Schwimm- Rad- und Laufeinheiten in abwechslungsreichen Intensitäten
          und Umfängen
        </p>
        <p>beschriebene Stabilisationseinheiten</p>
        <p>Yogaeinheiten</p>
        <p>
          weitere Regenerationseinheiten mit der Faszienrolle und dem Theraband
        </p>
        <p>detaillierte Wettkampfvorbereitung</p>
        <p>Leistungstests</p>
        <p>wöchentliches Feedback</p>
        <hr />
        <p>150€ mtl.</p>
        <p>für Triathlon-coaching</p>
        <p>inklusive Trainingpeaks Premium account</p>
        <hr />
        <p>115€ mtl.</p>
        <p>für Einzelsport-coaching // swim / bike / run</p>
        <p>inklusive Trainingpeaks Premium account</p>

        <div>
          <h1>Statische Trainingspläne</h1>

          <p>
            Falls dir ein statischer Plan ausreicht schau gern mal in meine
            Trainingsplanbibliothek.
          </p>
          <button>
            <Link
              target="_blank"
              to="https://www.trainingpeaks.com/coach/siyli-endurance-coaching#trainingplans"
            >
              Trainingsplanbibliothek bei Trainingpeaks
            </Link>
          </button>
          <p>
            Der Trainingpeaks Basis-account ist für dich kostenlos mit dabei, so
            dass du sofort starten kannst.
          </p>
          <p>
            Falls du einen statischen Plan zur Vorbereitung auf ein Event
            benötigst (1-3 Monate) schreibe mir gern eine Nachricht.
          </p>
          <p>
            Trainingpeaks benötigt für die Berechnung deiner Trainingseinheiten
            entweder deinen Maximalpuls oder deinen Schwellenwert.
          </p>
          <button>
            <a id="mailto" href="calc.html">
              Endurance Calculators{" "}
            </a>
          </button>
          <p>
            Falls du keine aktuellen Werte haben solltest, nutze gern meinen
            Endurance Calculator.
          </p>
        </div>

        <div>
          <h1>1:1 Coachingstunde</h1>
          <p>swim // bike // run</p>
          <p>an einem Ort deiner Wahl oder per Videocall</p>
          <p>Technikanalyse</p>
          <p>Tipps und Tricks</p>
          <hr />
          <p>75€/h</p>
          <p>zzgl. Anfahrt und Eintritt</p>
        </div>
      </div>
    </>
  );
};

export default Services;
