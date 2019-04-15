import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: none;
  background: ${props => props.theme.backgroundColor};
  padding: 0.6rem 1.2rem;
  border: none;

  span {
    margin-right: 0.3rem;
  }

  @media (max-width: 1000px) {
    display: inline-block;
  }
`;

class MenuButton extends Component {
  render() {
    const { open, handleMenuButtonClick } = this.props;
    return (
      <StyledButton onClick={handleMenuButtonClick}>
        <span>{open ? "Ｘ" : "☰"}</span>
        Menu
      </StyledButton>
    );
  }
}

export default MenuButton;
