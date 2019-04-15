import React from "react";
import styled from "styled-components";

const StyledGallery = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;

    &::before,
    &::after {
      display: block;
      content: "";
      height: 10px;
    }

    &::before {
      background: linear-gradient(
        to left,
        ${props => props.theme.backgroundColor},
        transparent
      );
    }

    &::after {
      background: linear-gradient(
        to right,
        ${props => props.theme.backgroundColor},
        transparent
      );
    }
  }

  img {
    width: 100%;
  }
`;

const Gallery = () => {
  return (
    <StyledGallery>
      <h2>Instant Grams</h2>
      <img src="https://source.unsplash.com/random/201x201" alt="" />
      <img src="https://source.unsplash.com/random/202x202" alt="" />
      <img src="https://source.unsplash.com/random/203x203" alt="" />
      <img src="https://source.unsplash.com/random/204x204" alt="" />
      <img src="https://source.unsplash.com/random/205x205" alt="" />
      <img src="https://source.unsplash.com/random/206x206" alt="" />
      <img src="https://source.unsplash.com/random/207x207" alt="" />
      <img src="https://source.unsplash.com/random/207x208" alt="" />
      <img src="https://source.unsplash.com/random/207x209" alt="" />
      <img src="https://source.unsplash.com/random/207x210" alt="" />
    </StyledGallery>
  );
};

export default Gallery;
