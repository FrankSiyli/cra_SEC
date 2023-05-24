import React from "react";
import logoSmall from "../../images/logoSmall.png";

const Impressum = () => {
  return (
    <>
      <img id="logo-small" src={logoSmall} alt="logo" />

      <div className="content-container">
        <div className="single-content">
          <p>Frank Siyli</p>
          <p>Siyli endurance coaching</p>
          <p>Vogt Groth Weg 45a</p>
          <p>22609 Hamburg</p>
          <p>Tel.: 016099159478</p>
          <p>E-Mail: info@siyli-endurance-coaching.com</p>
          <p>
            USt. wird nicht ausgewiesen, da der Verkäufer/ die Verkäuferin
            Kleinunternehmer:in im Sinne des UStG ist.
          </p>
          <p>
            Plattform der EU-Kommission zur Online-Streitbeilegung:
            https://ec.europa.eu/odr
          </p>
          <p>
            Ich bin zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Impressum;
