import styled from "styled-components";
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

import hajj from "./assets/img/hajj.png";
import pattern from "./assets/img/pattern.png";
import light from "./assets/img/light.jpg";
import hajjBg from "./assets/img/hajj-bg.png";
const Hajj = () => {
  return (
    <MainWrapper>
      <Row>
        <Row50>
          <img src={hajj} alt="" />
        </Row50>
        <Row50>
          <h4>Hajj & umrah</h4>
          <p>
            We are a company which have a colossal practice about Hajj, Umrah
            and visit to Holy places, we offer the unparalleled services to the
            pilgrims owing to have self-experience and preeminent acquaintance.
          </p>
        </Row50>
      </Row>
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 10% 0 0 0;
  position: relative;
  background-image: url(${hajjBg});
  background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  /* &::before {
    content: "";
    background-image: url(${pattern});
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: 400px;
    background-repeat: repeat;
    opacity: 0.3;
    z-index: 0;
  } */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
    17deg,
    rgba(194, 191, 191, 1) 0%,
    rgba(141, 139, 217, 1) 23%,
    rgba(50, 136, 182, 1) 100%
  );
    opacity: 0.3;
    z-index: 0;
  }
  h4 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    text-align: left;
    font-family: "Rowdies";
    letter-spacing: 0.5px;
    transition: opacity 2.3s;
    margin: 0 0 5px 0;
  }
  p {
    color: #ffffff;
    line-height: 1.8;
    letter-spacing: 0;
    font-family: "Rubik";
    font-size: 20px;
    max-width: 500px;
    text-align: left;
    margin: 0;
    padding: 20px 0 0 0;
    font-weight: 500;
  }
`;
const Row30 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
`;
const Row70 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 70%;
  flex: 0 0 70%;
  max-width: 70%;
`;
const Row50 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  &:nth-child(1) {
    /* &::before {
      content: "";
      background-image: url(${light});
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-size: 400px;
      background-repeat: repeat;
      opacity: 0.3;
      z-index: 0;
    } */
  }
`;
const Row33 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
`;
export default Hajj;
