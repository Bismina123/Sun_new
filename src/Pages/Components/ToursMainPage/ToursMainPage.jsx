// import React from 'react'
import "./tours.css";
import background from "./assets/background.png";
import fog7 from "./assets/fog_7.png";
import mountan10 from "./assets/mountain_10.png";
import fog6 from "./assets/fog_6.png";
import mountain9 from "./assets/mountain_9.png";
import mountain8 from "./assets/mountain_8.png";
import fog5 from "./assets/fog_5.png";
import mountain7 from "./assets/mountain_7.png";
import mountain6 from "./assets/mountain_6.png";
import fog4 from "./assets/fog_4.png";
import mountain5 from "./assets/mountain_5.png";
import fog3 from "./assets/fog_3.png";
import fog2 from "./assets/fog_2.png";
import mountain3 from "./assets/mountain_3.png";
import mountain2 from "./assets/mountain_2.png";
import mountain1 from "./assets/mountain_1.png";
import mountain4 from "./assets/mountain_4.png";
import fog1 from "./assets/fog_1.png";
import sunRays from "./assets/sun_rays.png";
import blackShadow from "./assets/black_shadow.png";
import { useEffect } from "react";

const ToursMainPage = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll(".paralax");
    let xValue = 0;
    let yValue = 0;
    let rotateDegree = 0;

    const handleMouseMove = (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;
      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
      parallaxElements.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `perspective(2300px) translateZ(${
          zValue * speedz
        }px) rotateY(${rotateDegree}deg) translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to ensure the effect runs only once
  return (
    <div className="main">
      <div className="vingnette"></div>
      <img
        src={background}
        alt="background"
        data-speedx="0.3"
        data-speedy="0.38"
        data-speedz="0"
        data-rotation="0"
        className="paralax bg-img"
      />
      <img
        src={fog7}
        alt={fog7}
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-7"
      />
      <img
        src={mountan10}
        alt={mountan10}
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotation="0"
        className="paralax mountain-10"
      />
      <img
        src={fog6}
        alt={fog6}
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-6 "
      />
      <img
        src={mountain9}
        alt={mountain9}
        data-speedx="0.125"
        data-speedy="0.155"
        data-speedz="0.15"
        data-rotation="0"
        className="paralax mountain-9"
      />
      <img
        src={mountain8}
        alt={mountain8}
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0"
        data-rotation="0"
        className="paralax mountain-8"
      />
      <img
        src={fog5}
        alt={fog5}
        data-speedx="0.16"
        data-speedy="0.105"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-5"
      />
      <img
        src={mountain7}
        alt={mountain7}
        data-speedx="0.1"
        data-speedy="0.1"
        data-speedz="0"
        data-rotation="0"
        className="paralax mountain-7"
      />

      <div
        data-speedx="0.07"
        data-speedy="0.07"
        data-speedz="0"
        data-rotation="0"
        className="paralax text"
      >
        <h2>China</h2>
        <h1>Bisminaaaaa</h1>
      </div>
      <img
        src={mountain6}
        alt="mountain6"
        data-speedx="0.065"
        data-speedy="0.05"
        data-speedz="0.05"
        data-rotation="0"
        className="paralax mountain-6"
      />
      <img
        src={fog4}
        alt={fog4}
        data-speedx="0.135"
        data-speedy="0.04"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-4"
      />
      <img
        src={mountain5}
        alt={mountain5}
        data-speedx="0.08"
        data-speedy="0.03"
        data-speedz="0.13"
        data-rotation="0"
        className="paralax mountain-5"
      />
      <img
        src={fog3}
        alt={fog3}
        data-speedx="0.11"
        data-speedy="0.018"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-3"
      />
      <img
        src={mountain4}
        alt={mountain4}
        data-speedx="0.059"
        data-speedy="0.024"
        data-speedz="0.32"
        data-rotation="0"
        className="paralax mountain-4"
      />

      <img
        src={mountain3}
        alt={mountain3}
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotation="0"
        className="paralax mountain-3"
      />
      <img
        src={fog2}
        alt={fog2}
        data-speedx="0.15"
        data-speedy="0.0115"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-2"
      />
      <img
        src={mountain2}
        alt="mountain2"
        data-speedx="0.0235"
        data-speedy="0.013"
        data-speedz="0.42"
        data-rotation="0"
        className="paralax mountain-2"
      />
      <img
        src={mountain1}
        alt={mountain1}
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.53"
        data-rotation="0"
        className="paralax mountain-1"
      />
      <img src={sunRays} alt={sunRays} className="sun-rays" />
      <img src={blackShadow} alt={blackShadow} className="black-shadow" />
      <img
        src={fog1}
        alt={fog1}
        data-speedx="0.12"
        data-speedy="0.01"
        data-speedz="0"
        data-rotation="0"
        className="paralax fog-1"
      />

    </div>
  );
};

export default ToursMainPage;
