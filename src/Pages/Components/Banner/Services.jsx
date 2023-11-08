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
import Slide from "react-reveal/Slide";
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
    <MainWrapper>
      <SubWrapper>
        <Wrapper>
          <WrapperRight>
            <Slide right>
              <img src={hajjImage} />
              <h4>Hajj & umrah</h4>
              <p>
                We are a company which have a colossal practice about Hajj,
                Umrah and visit to Holy places, we offer the unparalleled
                services to the pilgrims owing to have self-experience and
                preeminent acquaintance. Top class residences in Makkah & Madina
                and nearest camp
              </p>
            </Slide>
          </WrapperRight>
          <WrapperLeft>
            <Slide left>
              <img src={hajjImage} />
              <h4>Air Tickets</h4>
              <p>
                Being an accredited travel company we can provide travel
                documents for all the major Airlines. Our Company is equipped
                with latest reservation systems (GDS) where we can reserve, book
                and rebook flights according to your desires and commitments.
              </p>
            </Slide>
          </WrapperLeft>
          <WrapperRight>
            <Slide right>
              <img src={hajjImage} />
              <h4>Tour Packages</h4>
              <p>
                We are the travel company which offers various domestic and
                international tour packages service within your budget. We are
                specialized various Domestic & International tour Packages. Our
                staff is well-travelled and has an excellent knowledge of
                holiday destinations and our network of friends across the world
                make sure all your needs are satisfied and enjoy the travel as
                you expect. Our aim is provided luxury holidays without any
                hassle.
              </p>
            </Slide>
          </WrapperRight>
          <WrapperLeft>
            <Slide left>
              <img src={hajjImage} />

              <h4>Global Visa</h4>

              <p>
                We’re the company of professionals, doers and adventurous souls.
                It is a one-stop solution for all your visa needs. We are an
                agency with a difference in order to cater to all Visa related
                services. Our objective is to provide the best services to all
                our valued clients. Our TEAM consists of well trained and
                experienced professionals, specialised in Visa related services.
                We cater to Agents, Corporate – local as well as clients &
                Agents from various parts of World
              </p>
            </Slide>
          </WrapperLeft>
        </Wrapper>
      </SubWrapper>
    </MainWrapper>
  );
};

const UpAnimation = keyframes`${slideInUp}`;
const DownAnimation = keyframes`${slideOutUp}`;
const InDownAnimation = keyframes`${slideInDown}`;
const BottomLeftAnimation = keyframes`${fadeInTopLeft}`;
const WrapperRight = styled.div`
  text-align: right;
  padding: 60px 15% 10px 0;
  background-image: url(${leftImage});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  img {
    width: 20vw;
    max-width: 330px;
    margin: 0 0 0 auto;
    display: block;
  }
  h4 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: capitalize;
    color: #252525;
    margin-bottom: 50px;
    text-align: left;
    font-family: "Rowdies";
    letter-spacing: 0.5px;
    transition: opacity 2.3s;
    text-align: right;
  }
  p {
    color: #252525;
    line-height: 2;
    letter-spacing: 0.2px;
    font-family: "Rubik";
    font-size: 16px;
    max-width: 700px;
    text-align: right;
    margin: 0 0 0 auto;
  }
`;
const WrapperLeft = styled.div`
  text-align: left;
  padding: 60px 0 10px 15%;
  background-image: url(${rightImage});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  img {
    width: 20vw;
    max-width: 330px;
    margin: 0 auto 0 0;
    display: block;
  }
  h4 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: capitalize;
    color: #252525;
    margin-bottom: 50px;
    text-align: left;
    font-family: "Rowdies";
    letter-spacing: 0.5px;
    transition: opacity 2.3s;
  }
  p {
    color: #252525;
    line-height: 2;
    letter-spacing: 0.2px;
    font-family: "Rubik";
    font-size: 16px;
    max-width: 700px;
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
  animation: 1.5s ${BottomLeftAnimation};
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
