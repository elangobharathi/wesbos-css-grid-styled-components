import React, { Component } from "react";
import styled from "styled-components";
import MenuButton from "../MenuButton";
import MenuList from "../MenuList";

const StyledMenu = styled.nav`
  @media (max-width: 1000px) {
    order: -1;
    perspective: 800px;
  }
`;

class Menu extends Component {
  state = {
    open: false
  };

  handleMenuButtonClick = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open } = this.state;
    return (
      <StyledMenu>
        <MenuButton
          open={open}
          handleMenuButtonClick={this.handleMenuButtonClick}
        />
        <MenuList open={open} />
      </StyledMenu>
    );
  }
}

export default Menu;
