import { useState, useEffect, useRef } from "react";
import "./banner.css";
import styled, { keyframes } from "styled-components";
import {
  slideInUp,
  slideOutUp,
  slideInDown,
  fadeInTopLeft,
} from "react-animations";
import Icon from "./assets/img/icon.svg";
import "@fontsource/rubik"; // Defaults to weight 300
import "@fontsource/rubik/300.css"; // Specify weight
import "@fontsource/rubik/300-italic.css"; // Specify weight and style
import "@fontsource/kanit"; // Defaults to weight 300
import "@fontsource/kanit/300.css"; // Specify weight
import "@fontsource/kanit/300-italic.css"; // Specify weight and style
import "@fontsource/lilita-one"; // Defaults to weight 300
// import "@fontsource/lilita-one/300.css"; // Specify weight
// import "@fontsource/lilita-one/300-italic.css"; // Specify weight and style

import "@fontsource/rubik"; // Defaults to weight 300
import "@fontsource/rubik/300.css"; // Specify weight
import "@fontsource/rubik/300-italic.css"; // Specify weight and style

import "@fontsource/rowdies"; // Defaults to weight 300
import "@fontsource/rowdies/300.css"; // Specify weight
// import "@fontsource/rowdies/300-italic.css"; // Specify weight and style
// import Flip from 'react-reveal/Flip';
const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const footerRef = useRef();
  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;
      // If the element is in the viewport
      if (entry.isIntersecting) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Adjust the threshold based on your requirements (e.g., 2%)
    });
    observer.observe(footerRef.current);
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  const divClassName = isScrolled ? "scrolled" : "";
  return (
    <Wrapper
  
      ref={footerRef}
      className={`scrollable-div ${divClassName}`}
    >
      <Row>
        <Row30></Row30>
        <Row70>
          <Row>
            <Row33>
              <h4>Packages</h4>
              <ul>
                <li
                  id="menu-item-188"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-188"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/popular/">
                    Popular
                  </a>
                </li>
                <li
                  id="menu-item-189"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-189"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/pilgrim/">
                    Pilgrim
                  </a>
                </li>
                <li
                  id="menu-item-190"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-190"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/student/">
                    Student
                  </a>
                </li>
                <li
                  id="menu-item-191"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-191"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/cruise/">
                    Cruise
                  </a>
                </li>
                <li
                  id="menu-item-192"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-192"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/domestic/">
                    Domestic
                  </a>
                </li>
                <li
                  id="menu-item-193"
                  class="menu-item menu-item-type-post_type menu-item-object-package menu-item-193"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package/international/">
                    International
                  </a>
                </li>
              </ul>
            </Row33>
            <Row33>
              <h4>Services</h4>
              <ul>
                <li
                  id="menu-item-194"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-194"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/frro-services/">
                    FRRO Services
                  </a>
                </li>
                <li
                  id="menu-item-195"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-195"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/medical-appointments/">
                    Medical Appointments
                  </a>
                </li>
                <li
                  id="menu-item-196"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-196"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/certificate-attestation/">
                    Certificate Attestation
                  </a>
                </li>
                <li
                  id="menu-item-197"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-197"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/passport-services/">
                    Passport Services
                  </a>
                </li>
                <li
                  id="menu-item-198"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-198"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/visa-services/">
                    Visa Services
                  </a>
                </li>
                <li
                  id="menu-item-199"
                  class="menu-item menu-item-type-post_type menu-item-object-service menu-item-199"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/service/embassy-services/">
                    Embassy Services
                  </a>
                </li>
              </ul>
            </Row33>
            <Row33>
              <h4>Quick Links</h4>
              <ul>
                <li
                  id="menu-item-214"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-214"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/air-ticketing/">
                    Air Ticketing
                  </a>
                </li>
                <li
                  id="menu-item-255"
                  class="menu-item menu-item-type-post_type menu-item-object-study_abroad menu-item-255"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/study_abroad/canada/">
                    Study Abroad
                  </a>
                </li>
                <li
                  id="menu-item-212"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-212"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/migration-support/">
                    Migration Support
                  </a>
                </li>

                <li
                  id="menu-item-217"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/package-customizer/">
                    Package Customizer
                  </a>
                </li>
                <li
                  id="menu-item-216"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/seasonal-packages/">
                    Seasonal Packages
                  </a>
                </li>
                <li
                  id="menu-item-215"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"
                >
                  <a href="https://sunint-test.wpstaging.neoito.com/latest-offers/">
                    Latest Offers
                  </a>
                </li>
              </ul>
            </Row33>
          </Row>
        </Row70>
      </Row>
      <div class="wrapper one">
        <div class="drop-main">
          <div class="s">S</div>
          <div class="u">U</div>
          <div class="n">N</div>
          <div class="logo-icon">
            <img src={Icon} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow: hidden;
  .drop-main {
    display: flex;
    font-size: 35vw;
    justify-content: flex-start;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Rowdies";
    letter-spacing: -25px;
    transition: opacity 2.3s;
    margin: 0 0 5px 0;
  }
  &.scrolled {
    .s {
      animation: dropS 2s linear forwards;
    }
    .u {
      animation: dropU 2.4s linear forwards 0.2s;
    }
    .n {
      animation: dropN 2.5s linear forwards 0.4s;
    }
    .logo-icon {
      animation: dropIcon 2.5s linear forwards 0.4s;
    }
  }
  .s {
    opacity: 0;
    color: #ffffff;
    /* color: #4DB6AC; */
  }
  .u {
    opacity: 0;

    color: #ffffff;
    /* color: #64B5F6; */
  }
  .n {
    opacity: 0;

    /* color: #FFF176; */
  }
  .logo-icon {
    opacity: 0;

    display: flex;
    img {
      width: 15vw;
    }
  }
  @keyframes dropS {
    0% {
      transform: translateY(-200px) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0px) rotate(-1deg);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px) rotate(-2deg);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px) rotate(-3deg);
      opacity: 1;
    }
    90% {
      transform: translateY(0px) rotate(-4deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) rotate(-5deg);
      opacity: 1;
    }
  }
  @keyframes dropU {
    0% {
      transform: translateY(-200px) rotate(60deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0px) rotate(45deg);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px) rotate(30deg);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px) rotate(15deg);
      opacity: 1;
    }

    100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes dropN {
    0% {
      transform: translateY(-200px) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0px) rotate(-5deg);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px) rotate(-10deg);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px) rotate(-15deg);
      opacity: 1;
    }

    100% {
      transform: translateY(0px) rotate(-19deg);
      opacity: 1;
    }
  }
  @keyframes dropIcon {
    0% {
      transform: translateY(-200px) rotate(-60deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0px) rotate(-50deg);
      opacity: 1;
    }
    65% {
      transform: translateY(-17px) rotate(-30deg);
      opacity: 1;
    }
    75% {
      transform: translateY(-22px) rotate(-20deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
  }
`;
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
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 8% 0 2% 0;
  h4 {
    text-decoration: none;
    color: #ffffff;
    font-family: "Rubik";
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 0 10px 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      padding: 10px 0;
      a {
        text-decoration: none;
        color: #ffffff;
        font-family: "Rubik";
        font-size: 18px;
        margin: 0;
      }
    }
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
`;
const Row33 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
`;
export default Footer;
