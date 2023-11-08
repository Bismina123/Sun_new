import { useEffect, useState } from "react";
import "../BackgroundTextMarquee/backgroundMarquee.css";
import styled from "styled-components";
const BackgroundTextMarquee = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.querySelector(".marquee-container");
      if (div) {
        const divRect = div.getBoundingClientRect();
        if (divRect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MarqueeWrapper>
      <MarqueeBlock>
        <MarqueeText>
          Sun International Tours and Travels • Sun International Tours and
          Travels • Sun International Tours and Travels • Sun International
          Tours and Travels
        </MarqueeText>
      </MarqueeBlock>
    </MarqueeWrapper>
  );
};
const MarqueeWrapper = styled.div`
  position: relative;
  padding: 100px 0;

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
const MarqueeBlock = styled.div`
  transform: rotate(-2deg);
`;
const MarqueeText = styled.h1`
  animation: marquee 70s linear infinite;
  animation-delay: 15s;
  font-size: 5vw;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #252525, 1px -1px 0 #252525, -1px 1px 0 #252525,
    1px 1px 0 #252525;
  color: #ffffff;
  display: inline-block;
  opacity: 4;
  font-family: "Rowdies";
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export default BackgroundTextMarquee;
