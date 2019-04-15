import React from "react";
import styled from "styled-components";
import Top from "./Top";
import Menu from "./Menu";
import Features from "./Features";
import About from "../About";
import Gallery from "../Gallery";

const WrapperStyle = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Wrapper = () => (
  <WrapperStyle>
    <Top />
    <Menu />
    <Features />
    <About />
    <Gallery />
  </WrapperStyle>
);

export default Wrapper;
