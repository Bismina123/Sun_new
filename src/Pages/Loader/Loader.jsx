import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";

export const Loader = () => {
  const counterRef = useRef(0);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function updateCounter() {
      counterRef.current += Math.floor(Math.random() * 10) + 1;

      if (counterRef.current > 100) {
        counterRef.current = 100;
      }

      setCounter(counterRef.current);

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    gsap.to(counterRef.current, {
      duration: 3,
      ease: "power4.inOut",
      value: 100,
      onUpdate: () => {
        setCounter(Math.round(counterRef.current));
      },
      onComplete: () => {
        // Start updating the counter after it reaches 100
        updateCounter();
      },
    });
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(".counter", {
      duration: 0.25,
      opacity: 0,
    }).to(
      ".bar",
      {
        duration: 1.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      },
      "<" // Ensure that both animations start at the same time
    );
  }, []);

  return (
    <Wrapper>
      <H1 className="counter">{counter}</H1>
      <div className="overlay-loader">
        {[...Array(10)].map((_, index) => (
          <div className="bar" key={index}></div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .overlay-loader {
    position: fixed;
    width: 100vw;
    z-index: 2;
    height: 100vh;
    display: flex;

    .bar {
      width: 10vw;
      height: 105vh;
      background: #00e5ff;
    }
  }
`;

const H1 = styled.h1`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #25aba6;
  z-index: 3;
  font-size: 25rem;
  padding: 10px 20px;
`;
