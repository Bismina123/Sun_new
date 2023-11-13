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
import hajjImage from "./assets/img/hajj.png";
import planeImage from "./assets/img/plane.png";
import leftImage from "./assets/img/left.png";
import rightImage from "./assets/img/right.png";
// import Slide from "react-reveal/Slide";
import hajj1 from "./assets/img/hajj/2.svg";
import hajj2 from "./assets/img/hajj/3.svg";
import hajj3 from "./assets/img/hajj/4.svg";
import hajj4 from "./assets/img/hajj/5.svg";
import hajj5 from "./assets/img/hajj/6.svg";
import hajj6 from "./assets/img/hajj/7.svg";
import hajj7 from "./assets/img/hajj/8.svg";
import hajj8 from "./assets/img/hajj/9.svg";
import hajj9 from "./assets/img/hajj/10.svg";
import hajj10 from "./assets/img/hajj/11.svg";
import ticket1 from "./assets/img/tour/t1.svg";
import ticket2 from "./assets/img/tour/t2.svg";
import globalVisa from "./assets/img/globalvisa.png";
import tourPic from "./assets/img/tour.png";
import t1 from "./assets/img/t/1.svg";
import t2 from "./assets/img/t/2.svg";
import t3 from "./assets/img/t/3.svg";
import t4 from "./assets/img/t/4.svg";
import t5 from "./assets/img/t/5.svg";
import c1 from "./assets/img/c1.png";
import { Fade, Slide } from "react-awesome-reveal";
const Services = () => {
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
    <MainWrapper id="footer">
      <SubWrapper>
        <Wrapper>
          <Row>
            <RowLeft>
              <RowImage src={leftImage} />
            </RowLeft>
            <RowRight className="shadow-right">
              <WrapperRight>
                {/* <Slide> */}
                <div className="div-block">
                  <div>
                    <Slide direction="right">
                      <SvgIcon className="SvgIcon">
                        <SvgIconBlock>
                          <img src={globalVisa} alt="" />
                        </SvgIconBlock>
                      </SvgIcon>
                    </Slide>
                    <Slide direction="right">
                      <h4>Global Visa</h4>
                      <p>
                        We are a company which have a colossal practice about
                        Hajj, Umrah and visit to Holy places, we offer the
                        unparalleled services to the pilgrims owing to have
                        self-experience and preeminent acquaintance.
                      </p>
                    </Slide>
                  </div>
                  <h2>01</h2>
                </div>

                {/* </Slide> */}
              </WrapperRight>
            </RowRight>
          </Row>
          <Row>
            <RowLeft className="shadow-left">
              <WrapperLeft>
                {/* <Slide bottom> */}
                <div className="div-block">
                  <h2>02</h2>
                  <div>
                    <Slide direction="left">
                      <SvgIcon className="SvgIcon">
                        <SvgIconBlock>
                          <img src={globalVisa} alt="" />
                        </SvgIconBlock>
                      </SvgIcon>
                    </Slide>
                    <Slide direction="left">
                      <h4>Air Tickets</h4>
                      <p>
                        Being an accredited travel company we can provide travel
                        documents for all the major Airlines. Our Company is
                        equipped with latest reservation systems (GDS) where we
                        can reserve, book and rebook flights according to your
                        desires and commitments.
                      </p>
                    </Slide>
                  </div>
                </div>
                {/* </Slide> */}
              </WrapperLeft>
            </RowLeft>
            <RowRight>
              <RowImage src={rightImage} />
            </RowRight>
          </Row>
          <Row>
            <RowLeft>
              <RowImage src={leftImage} />
            </RowLeft>
            <RowRight>
              <WrapperRight>
                {/* <Slide> */}
                <div className="div-block">
                  <div>
                    <Slide direction="right">
                      <SvgIcon className="SvgIcon">
                        <SvgTourIcon>
                          <ImageBlock src={tourPic} alt="" />
                        </SvgTourIcon>
                      </SvgIcon>
                    </Slide>

                    <Slide direction="right">
                      <h4>Tour Packages</h4>
                      <p>
                        We are the travel company which offers various domestic
                        and international tour packages service within your
                        budget. We are specialized various Domestic &
                        International tour Packages.
                      </p>
                    </Slide>
                  </div>
                  <h2>03</h2>
                </div>
                {/* </Slide> */}
              </WrapperRight>
            </RowRight>
          </Row>
          <Row>
            <RowLeft className="shadow-left">
              <WrapperLeft>
                {/* <Slide bottom> */}
                <div className="div-block">
                  <h2>04</h2>
                  <div>
                    <Slide direction="left">
                      <SvgIcon className="SvgIcon">
                        <SvgIconBlock>
                          <img src={globalVisa} alt="" />
                        </SvgIconBlock>
                      </SvgIcon>
                    </Slide>
                    <Slide direction="left">
                      <h4>Certificate attestation</h4>
                      <p>
                        Being an accredited travel company we can provide travel
                        documents for all the major Airlines. Our Company is
                        equipped with latest reservation systems (GDS) where we
                        can reserve, book and rebook flights according to your
                        desires and commitments.
                      </p>
                    </Slide>
                  </div>
                </div>
                {/* </Slide> */}
              </WrapperLeft>
            </RowLeft>
            <RowRight>
              <RowImage src={rightImage} />
            </RowRight>
          </Row>
        </Wrapper>
      </SubWrapper>
    </MainWrapper>
  );
};

const UpAnimation = keyframes`${slideInUp}`;
const DownAnimation = keyframes`${slideOutUp}`;
const InDownAnimation = keyframes`${slideInDown}`;

const ImageBlock = styled.img`
  width: 300px !important;
  height: 300px !important;
  min-width: 300px !important;
`;
const SvgTourIcon = styled.div`
  width: 300px;
  height: 300px;
  img {
    height: 300px;
    width: 300px;
  }
  /* div {
    max-width: 90px;
    &:nth-child(1) {
      position: absolute;
      left: -25%;
      bottom: 25%;
    }
    &:nth-child(2) {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: 50%;
    }
    &:nth-child(3) {
      position: relative;
      padding: 0 0 0 25px;
    }
    &:nth-child(4) {
      position: absolute;
      left: -5%;
      bottom: 0;
    }
    &:nth-child(5) {
      position: absolute;
      left: 10%;
      bottom: 30%;
      width: 50%;
    }
    img {
      max-width: 100%;
    }
  } */
`;
const SvgTourIconBlock = styled.div``;
const SvgTicketBlock = styled.div`
  position: relative;
`;
const SvgTicketIcon = styled.div`
  position: relative;
  &:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
const RowImage = styled.img`
  max-width: 100%;
`;
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const RowLeft = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  .div-block {
    border-right: solid 1px #ffffff;
    border-bottom: solid 1px #ffffff;
    padding: 60px 14% 20px 27%;
    margin: 0 -1px 0 0 !important;
    width: 100%;
    display: flex;
    position: relative;
    h2 {
      position: absolute;
      top: -180px;
      left: 4px;

      font-size: 13em;
      color: #dad5d580;
      pointer-events: none;
    }
  }
`;
const RowRight = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  .div-block {
    border-left: solid 1px #ffffff;
    border-bottom: solid 1px #ffffff;
    padding: 60px 20% 20px 20%;
    width: 100%;
    display: flex;
    position: relative;
    h2 {
      position: absolute;
      top: -180px;
      right: 75px;
      font-size: 13em;
      color: #dad5d580;
      pointer-events: none;
    }
  }
`;

const SvgIconBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 250px;
  height: 250px;
  /* &:nth-child(1) {
    left: 20%;
    max-width: 65px !important;
    top: 0;
    z-index: 0;
  }
  &:nth-child(2) {
    left: calc(50% - 15px);
    max-width: 40px !important;
    bottom: 5px;
    z-index: 3;
  }
  &:nth-child(3) {
    left: calc(50% - -15px);
    max-width: 20px !important;
    bottom: 5px;
    z-index: 5;
  }
  &:nth-child(4) {
    left: 0;
    max-width: 20% !important;
    bottom: 0;
    z-index: 0;
  }
  &:nth-child(5) {
    left: 10%;
    max-width: 18% !important;
    bottom: 0;
    z-index: 0;
  }
  &:nth-child(6) {
    right: 0;
    max-width: 45% !important;
    bottom: 5%;
    z-index: 0;
    left: unset;
  }
  &:nth-child(7) {
    max-width: 100% !important;
    position: relative;
    bottom: unset;
    left: unset;
    z-index: 2;
  }
  &:nth-child(8) {
    width: 35% !important;
    left: 30%;
    z-index: 1;
    bottom: 5px;
  }
  &:nth-child(9) {
    left: calc(30% - -40px);
    max-width: 15px !important;
    bottom: 30%;
    z-index: 0;
  }
  &:nth-child(10) {
    left: calc(30% - -5px);
    max-width: 15px !important;
    bottom: 30%;
    z-index: 0;
  } */
`;
const SvgIcon = styled.div`
  display: flex;
  max-width: 200px;
  position: relative;
  margin: 0 auto 15px 0;
  align-items: flex-end;
  height: 200px;
  img {
    width: 100% !important;
    max-width: 100% !important;
  }
`;
const WrapperRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;

  /* background-image: url(${leftImage});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat; */
  img {
    width: 20vw;
    max-width: 330px;
    margin: 0 0 0 auto;
  }
  h4 {
    font-size: 3rem;
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
const WrapperLeft = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  /* background-image: url(${rightImage});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat; */
  img {
    width: 20vw;
    max-width: 330px;
    margin: 0 auto 0 0;
    display: block;
  }
  h4 {
    font-size: 3rem;
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

const TextEmpty = styled.div`
  width: 60px;
`;
const SmallText = styled.div`
  text-align: left;
  font-size: 30px;
  margin: 40px 0 0 0;
  font-family: "Rubik";
  color: #252525;
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
  font-size: 5vw;
  font-family: "Rowdies";
  color: #607d8b;
  position: relative;
  text-transform: uppercase;
  letter-spacing: -5.5px;
`;
const Wrapper = styled.div({
  color: "grey",
});
const MainWrapper = styled.div``;
const SubWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

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

export default Services;
