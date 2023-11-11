import { useState, useEffect } from "react";
import "./banner.css";
import styled, { keyframes } from "styled-components";
import {
  slideInUp,
  slideOutUp,
  slideInDown,
  fadeInTopLeft,
} from "react-animations";
import windowImage from "./assets/img/window.jpg";
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style
import "@fontsource/lilita-one"; // Defaults to weight 400
import "@fontsource/lilita-one/400.css"; // Specify weight
// import "@fontsource/lilita-one/400-italic.css"; // Specify weight and style

import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style

import "@fontsource/rowdies"; // Defaults to weight 400
import "@fontsource/rowdies/400.css"; // Specify weight
// import "@fontsource/rowdies/400-italic.css"; // Specify weight and style
// import Flip from 'react-reveal/Flip';
const Footer = () => {
  return (
    <Wrapper id="footer">
         {/* <Flip> */}
      <Title>Try the world with us</Title>
      {/* </Flip> */}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 5rem;
  font-weight: 700;
  text-transform: unset;
  color: #252525;
  margin-bottom: 50px;
  text-align: left;
  font-family: "Rowdies";
  letter-spacing: 0.5px;
  transition: opacity 2.3s;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  padding: 150px 0;
`;
export default Footer;
