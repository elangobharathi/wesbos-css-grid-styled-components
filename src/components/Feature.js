import React from "react";
import styled from "styled-components";

const StyledFeature = styled.div`
  background: white;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  span {
    font-size: 50px;
  }

  p {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Feature = ({ icon, title }) => {
  return (
    <StyledFeature>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        assumenda.
      </p>
    </StyledFeature>
  );
};

export default Feature;
