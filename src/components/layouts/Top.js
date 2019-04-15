import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import Cta from "../Cta";

const TopStyle = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "hero hero ."
    "hero hero .";

  @media (max-width: 700px) {
    grid-template-areas:
      "hero hero"
      ". .";
  }

  @media (max-width: 500px) {
    grid-template-areas:
      "hero"
      "."
      ".";
  }
`;

const Top = () => {
  return (
    <TopStyle>
      <Hero area="hero" />
      <Cta price={1.99} name="Tacos" />
      <Cta price={3.99} name="Kombucha" />
    </TopStyle>
  );
};

export default Top;
