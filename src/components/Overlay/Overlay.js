import React, { useState, useEffect } from "react";
import "./Overlay.css"; // Import your CSS file for styling the overlay

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setShowOverlay(windowHeight < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="overlay">
          <p>Please turn your device // Bitte drehe dein Handy</p>
        </div>
      )}
    </>
  );
};

export default Overlay;
