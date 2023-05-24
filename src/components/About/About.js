import React from "react";
import "../../Styles/App.css";
import "./About.css";
import avatar from "../../images/avatar.jpg";
import dtu from "../../images/dtu.png";
import trainingpeaksLogo from "../../images/trainingpeaks_logo_2.png";
import union from "../../images/union.png";
import { Link } from "react-router-dom";
import logoSmall from "../../images/logoSmall.png";

const About = () => {
  return (
    <>
      <img id="logo-small" src={logoSmall} alt="logo" />

      <div className="content-container">
        <div className="single-content">
          <h2>
            <span className="yellow-word">Moin</span>
          </h2>
          <br />
          <p>Ich bin Frank aus Hamburg</p>
          <p>und unterstütze seit 2017</p>
          <p>
            Athlet:innen dabei ihre <span className="yellow-word">Träume</span>{" "}
            zu verwirklichen.
          </p>
          <img className="about-logos" src={avatar} alt="itsme" />
          <p>
            Ich bin lizensierter <span className="yellow-word">DTU</span> und{" "}
            <span className="yellow-word">Trainingpeaks</span> Trainer.
          </p>
          <img className="about-logos" src={dtu} alt="dtu" />
          <img
            className="about-logos"
            src={trainingpeaksLogo}
            alt="trainingpeaks-logo"
          />
        </div>
        <div className="single-content">
          <p>
            Als Athlet fühle ich mich auf den{" "}
            <span className="yellow-word">Ultradistanzen</span> zu Hause.
          </p>
          <p>
            Diese Leidenschaft führte 2022 zu einem{" "}
            <span className="yellow-word">Finish</span> beim
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
          <p>
            <span className="yellow-word">10x Langdistanz</span>
          </p>
          <p>
            <span className="yellow-word">38km</span> Swim -{" "}
            <span className="yellow-word">1800km</span> Bike -{" "}
            <span className="yellow-word">422km</span> Run
          </p>
        </div>
        <div className="single-content">
          <p>
            Wenn du Lust hast mit mir{" "}
            <span className="yellow-word">zusammen</span>
          </p>
          <p>
            deine <span className="yellow-word">Grenzen zu verschieben</span>
          </p>
          <p>
            deinen <span className="yellow-word">ersten Triathlon</span> zu
            finishen
          </p>
          <p>
            in die <span className="yellow-word">Faszination</span> des
            Ultratriathlons einzutauchen
          </p>
          <p>einen Weg raus aus einer Verletzungsphase zu finden</p>
          <p>
            <span className="yellow-word">mit einem Lächeln</span> deine
            Komfortzone zu verlassen
          </p>

          <p>dann schreibe mir gern eine Nachricht.</p>
          <br />
          <p>All training sessions are in german and english</p>
          <img className="union" src={union} alt="english" />
          <p>if you have any questions please send me a message.</p>
        </div>
      </div>
    </>
  );
};

export default About;
