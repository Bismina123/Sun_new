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
import cloudImage from "./assets/img/bg.png";
import planeImage from "./assets/img/plane.png";
import BannerClouds from "../BannerClouds/BannerClouds";

import "@fontsource/dm-serif-display"; // Defaults to weight 400
import "@fontsource/dm-serif-display/400.css"; // Specify weight
import "@fontsource/dm-serif-display/400-italic.css"; // Specify weight and style

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(-1);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(1);
      } else {
        setIsScrolled(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollPlane = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollPlane);

    return () => {
      window.removeEventListener("scroll", handleScrollPlane);
    };
  }, []);

  // Adjust these values to control the translation and scale
  const translateY = scrollY;
  const scale = 1 + scrollY * 0.0002;
  const rotate = 1 + scrollY * 0.0009;
  return (
    <MainWrapper>
      <BannerClouds />
      <SubWrapper>
        <Wrapper>
          <PlaneWrapperMain>
            {/* <PlaneWrapper style={{ transform: `scale(${scale})` }}> */}
            {/* <PlaneWrapper
              style={{
                transform: `scale(${scale}) translateX(${translateY}px) translateY(${translateY}px) rotate(${rotate}deg)`,
              }}
            >
              <ImgWrapper src={planeImage} />
            </PlaneWrapper> */}
            {/* <ButtonWrapper>
              <Button
                className={`${
                  isScrolled === 1
                    ? "topScroll"
                    : isScrolled === 0
                    ? "bottomScroll"
                    : ""
                }`}
              >
                Contact Us
              </Button>
              <Button
                className={`${
                  isScrolled === 1
                    ? "topScroll"
                    : isScrolled === 0
                    ? "bottomScroll"
                    : ""
                }`}
              >
                Whats New!
              </Button>
            </ButtonWrapper> */}
          </PlaneWrapperMain>
          <Text>
            <div class="wrapper one">
              <div class="drop-main">
                <div class="d">S</div>
                <div class="r">U</div>
                <div class="o">N</div>
              </div>
            </div>
            {/* <Text1
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              S
            </Text1>
            <Text2
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              U
            </Text2>
            <Text3
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              N
            </Text3> */}
            {/* <Text4
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              e
            </Text4>
            <Text5
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              n
            </Text5>
            <Text6
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              t
            </Text6>
            <Text7
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              u
            </Text7>
            <Text8
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              r
            </Text8>
            <Text9
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              e
            </Text9>
            <TextEmpty></TextEmpty>
            <Text10
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              A
            </Text10>
            <Text9
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              w
            </Text9>
            <Text8
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              a
            </Text8>
            <Text7
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              i
            </Text7>
            <Text6
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              t
            </Text6>
            <Text5
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              s
            </Text5>
            <TextEmpty></TextEmpty>
            <Text4
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              H
            </Text4>
            <Text3
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              e
            </Text3>
            <Text2
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              r
            </Text2>
            <Text1
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              e
            </Text1> */}
          </Text>
          <TextBlock>
            <SmallText
              className={`${
                isScrolled === 1
                  ? "topScroll"
                  : isScrolled === 0
                  ? "bottomScroll"
                  : ""
              }`}
            >
              Travel to your dream destination with us
            </SmallText>
          </TextBlock>
        </Wrapper>
      </SubWrapper>
    </MainWrapper>
  );
};

const UpAnimation = keyframes`${slideInUp}`;
const DownAnimation = keyframes`${slideOutUp}`;
const InDownAnimation = keyframes`${slideInDown}`;
const BottomLeftAnimation = keyframes`${fadeInTopLeft}`;

const TextBlock = styled.div``;
const Button = styled.button`
  display: inline-block;
  border: solid 1px #63d0de;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 20px;
  white-space: nowrap;
  margin: 0 0 0 20px;
  background: none;
  color: #449fab;
  &:nth-child(1) {
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
  }
  &:nth-child(2) {
    animation: 1.1s ${UpAnimation};
    transition: opacity 1.1s;

    &.topScroll {
      animation: 1.1s ${DownAnimation};
      opacity: 0;
    }
    &.bottomScroll {
      animation: 1.1s ${InDownAnimation};
      opacity: 1;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ImgWrapper = styled.img`
  max-width: 550px;
  margin: 0;
`;
const Text1 = styled.div`
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
const Text2 = styled.div`
  animation: 2.1s ${UpAnimation};
  transition: opacity 2.1s;

  &.topScroll {
    animation: 2.1s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 2.1s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text3 = styled.div`
  animation: 1.9s ${UpAnimation};
  transition: opacity 1.9s;

  &.topScroll {
    animation: 1.9s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.9s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text4 = styled.div`
  animation: 1.7s ${UpAnimation};
  transition: opacity 1.7s;

  &.topScroll {
    animation: 1.7s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.7s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text5 = styled.div`
  animation: 1.5s ${UpAnimation};
  transition: opacity 1.5s;

  &.topScroll {
    animation: 1.5s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.5s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text6 = styled.div`
  animation: 1.3s ${UpAnimation};
  transition: opacity 1.3s;

  &.topScroll {
    animation: 1.3s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.3s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text7 = styled.div`
  animation: 1.1s ${UpAnimation};
  transition: opacity 1.1s;

  &.topScroll {
    animation: 1.1s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.1s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text8 = styled.div`
  animation: 0.9s ${UpAnimation};
  transition: opacity 0.9s;

  &.topScroll {
    animation: 0.9s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 0.9s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text9 = styled.div`
  animation: 0.7s ${UpAnimation};
  transition: opacity 0.7s;

  &.topScroll {
    animation: 0.7s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 0.7s ${InDownAnimation};
    opacity: 1;
  }
`;
const Text10 = styled.div`
  animation: 0.5s ${UpAnimation};
  transition: opacity 0.6s;

  &.topScroll {
    animation: 0.5s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 0.5s ${InDownAnimation};
    opacity: 1;
  }
`;
const TextEmpty = styled.div`
  width: 60px;
`;
const SmallText = styled.div`
  text-align: left;
  font-size: 30px;
  margin: 20px 0 0 0;
  font-family: "Rubik";
  color: #ffffff;
  max-width: 300px;
  animation: 0.5s ${UpAnimation};
  transition: opacity 0.6s;
  &.topScroll {
    animation: 0.5s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 0.5s ${InDownAnimation};
    opacity: 1;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 30vw;
  font-family: "Rowdies";
  color: #252525;
  position: relative;
  text-transform: uppercase;
  letter-spacing: -5.5px;
`;
const Wrapper = styled.div({
  color: "grey",
});
const MainWrapper = styled.div`
  .drop-main {
    display: flex;
    font-size: 7rem;
    margin: 1.5rem;
    justify-content: center;
    font-family: "Russo One", sans-serif;
    display: flex;
    font-size: 30vw;
    font-family: "Rowdies";
    color: #ffffff;
    position: relative;
    text-transform: uppercase;
    letter-spacing: -5.5px;
  }
  .d {
    opacity: 0;
    animation: drop 0.4s linear forwards;
  }
  .r {
    opacity: 0;
    animation: drop 0.4s linear forwards 0.2s;
  }
  .o {
    opacity: 0;
    animation: drop 0.4s linear forwards 0.4s;
  }
  .p {
    opacity: 0;
    animation: drop 0.4s linear forwards 0.6s;
  }
  .s {
    opacity: 0;
    animation: drop 0.4s linear forwards 0.8s;
  }
  @keyframes drop {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
    50% {
      transform: translateY(0px);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px);
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
const SubWrapper = styled.div({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundImage: `url(${cloudImage})`,
  // backgroundPosition: "bottom center",
  // backgroundSize: "cover",
});

// const PlaneWrapper = styled.div({
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)"
//   });
const PlaneWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  animation: 1s ${UpAnimation};
  /* font-size: 100vh;
   */

  /* transition: opacity 1.5s; */
  /* &.topScroll {
    animation: 1.5s ${DownAnimation};
    opacity: 0;
  }
  &.bottomScroll {
    animation: 1.5s ${InDownAnimation};
    opacity: 1;
  } */
  z-index: -1;
`;
const PlaneWrapperMain = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  /* position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;

export default Banner;
