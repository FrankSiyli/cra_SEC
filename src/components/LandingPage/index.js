import React from "react";
import Header from "../Header";
import styled, { keyframes } from "styled-components";
import swimImage from "../../images/swim.png";

const rotateColors = keyframes`
  0% {
    background: #100f11;
    transform :  translateX(100vw) rotate(360deg);
  }
  100% {
    background: #100f11;
  }
`;

const StyledLandingpage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${swimImage});
  animation: ${rotateColors} 2s ease;
`;

const LandingPage = () => {
  return (
    <StyledLandingpage>
      <Header />
    </StyledLandingpage>
  );
};

export default LandingPage;
