import React from "react";
import styled from "styled-components";

const StyledCta = styled.div`
  background: ${props => props.theme.backgroundColor};
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;

  p {
    margin: 0;
  }

  p:first-child {
    font-size: 60px;
    font-weight: 300;
  }

  p:last-child {
    font-size: 1rem;
    font-weight: 700;
  }
`;

const Cta = ({ price, name }) => {
  return (
    <StyledCta>
      <p>{`$${price}`}</p>
      <p>{name}</p>
    </StyledCta>
  );
};

export default Cta;
