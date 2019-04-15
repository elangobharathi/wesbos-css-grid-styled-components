import React from "react";
import styled from "styled-components";
import Feature from "../Feature";

const StyledFeatures = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Features = () => {
  return (
    <StyledFeatures>
      <Feature icon="🌮" title="Tacos" />
      <Feature icon="🍺" title="Beer" />
      <Feature icon="🍷" title="Wine" />
      <Feature icon="🎼" title="Music" />
    </StyledFeatures>
  );
};

export default Features;
