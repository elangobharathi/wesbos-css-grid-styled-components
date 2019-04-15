import React from "react";
import styled from "styled-components";

const StyledHero = styled.header`
  grid-area: hero;
  min-height: 400px;
  background: white url(images/taco.jpg);
  background-size: cover;
  background-position: bottom right;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  & > * {
    background: ${props => props.theme.backgroundColor};
    padding: 5px;
  }
`;

const Hero = ({ area }) => {
  return (
    <StyledHero area={area}>
      <h1>Terry's Taco Joint</h1>
      <p>Pretty Good Tacos!</p>
    </StyledHero>
  );
};

export default Hero;
