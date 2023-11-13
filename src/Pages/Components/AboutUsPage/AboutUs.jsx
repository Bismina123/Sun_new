import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import EarthCanvas from "../../Canvas/EarthThreeD/Earth";
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import {
  slideInUp,
  slideOutUp,
  slideInDown,
  fadeInTopLeft,
} from "react-animations";
import topImage from "../Banner/assets/img/top.png";
// import Fade from "react-reveal/Fade";

// import Bounce from "react-reveal/Bounce";
import { Fade, Zoom } from "react-awesome-reveal";
const AboutUs = () => {
  const [isScrolled, setIsScrolled] = React.useState(-1);
  return (
    <MainWrapper className="relative z-0">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <Fade direction="top" duration={2000}>
          <MainText
            className={`aboutUsText ${
              isScrolled === 1
                ? "topScroll"
                : isScrolled === 0
                ? "bottomScroll"
                : ""
            }`}
          >
            We&apos;re <br />
            more than just
            <br />
            travelling
          </MainText>
        </Fade>
        <Zoom direction="right">
          <Paragraph
            className={`${
              isScrolled === 1
                ? "topScroll"
                : isScrolled === 0
                ? "bottomScroll"
                : ""
            }`}
          >
            For more than 20 years we at Sun International has been providing
            the safest and highly trusted travel services that our satisfied
            customers will certainly attest to. And at present, we have become
            one of the most popular names in the Indian tourism industry. Each
            and every Travel Expert at Sun International is well aware about the
            measures taken in-house to ensure a safe and delightful travel
            experience for our customers.
          </Paragraph>
        </Zoom>
      </motion.div>
      {/* <Bounce bottom duration={4000}> */}
      <div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" earth-3d-styles"

      >
        <EarthCanvas />
      </div>
      {/* </Bounce> */}
    </MainWrapper>
  );
};
const UpAnimation = keyframes`${slideInUp}`;
const DownAnimation = keyframes`${slideOutUp}`;
const InDownAnimation = keyframes`${slideInDown}`;

const MainText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
  color: #252525;
  margin-bottom: 50px;
  text-align: left;
  font-family: "Rowdies";
  letter-spacing: 0.5px;
  animation: 2.3s ${UpAnimation};
  transition: opacity 2.3s;

  &.topScroll {
    animation: 2.3s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 2.3s ${InDownAnimation};
    opacity: 1;
  }
`;
const Paragraph = styled.p`
  color: #252525;
  text-align: left;
  line-height: 2;
  letter-spacing: 0.2px;
  font-family: "Rubik";
  font-size: 16px;
  max-width: 700px;
  animation: 2.3s ${UpAnimation};
  transition: opacity 2.3s;

  &.topScroll {
    animation: 2.3s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 2.3s ${InDownAnimation};
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 1200px) {
    margin-bottom: 0;
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  padding: 20px 15%;
  display: grid;
  grid-template-columns: 50% 30%;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  margin: 0 auto;
  /* background-image: url(${topImage}); */
  @media (min-width: 320px) and (max-width: 1200px) {
    display: block;
  }
`;
export default AboutUs;
