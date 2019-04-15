import React from "react";
import styled, { css } from "styled-components";

const StyledMenuList = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  a {
    background: ${props => props.theme.backgroundColor};
    display: block;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    color: ${props => props.theme.fontColor};
    text-transform: uppercase;
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    max-height: 0;
    overflow: hidden;
    transform: rotateX(90deg);
    transition: all 0.5s;

    ${props =>
      props.open
        ? css`
            max-height: 500px;
            transform: rotateX(0);
          `
        : css`
            max-height: 0;
            transform: rotateX(90deg);
          `}
  }
`;

const MenuList = ({ open }) => {
  return (
    <StyledMenuList open={open}>
      <li>
        <a href="">Tacos</a>
      </li>
      <li>
        <a href="">Beers</a>
      </li>
      <li>
        <a href="">Wines</a>
      </li>
      <li>
        <a href="">Desserts</a>
      </li>
      <li>
        <a href="">Reservations</a>
      </li>
    </StyledMenuList>
  );
};

export default MenuList;
