import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  background: white;
  padding: 50px;
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDetails = styled.div`
  align-self: center;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }

  button {
    background: ${props => props.theme.backgroundColor};
    border: none;
    padding: 0.5rem 1rem;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <img src="images/queso-taco.png" alt="" />
      <StyledDetails>
        <h2>Featured Taco</h2>
        <p>Slim Profile, easy to hold and loaded with cheese.</p>
        <p>This is the one you have been waiting for</p>
        <button>Learn More →</button>
      </StyledDetails>
    </StyledAbout>
  );
};

export default About;
