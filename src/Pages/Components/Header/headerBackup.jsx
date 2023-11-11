import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style
import "@fontsource/lilita-one"; // Defaults to weight 400
import "@fontsource/lilita-one/400.css"; // Specify weight
// import "@fontsource/lilita-one/400-italic.css"; // Specify weight and style
import Logo from "./assets/img/Logo.svg";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import img5 from "./assets/img/5.png";
import img6 from "./assets/img/6.png";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
`;

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0 0 0 15px;
  min-width: 40px;
`;

const Line = styled.span`
  display: flex;
  align-items: flex-end;
  border-radius: 50px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  height: 0.8px;
  margin: 4px 0;
  background-color: #252525;
  transition: max-width 0.4s ease-in-out;
  cursor: pointer;
  
  &:nth-child(2) {
    -ms-flex: 0 0 ${(props) => (props.open ? "40%" : "70%")};
    flex: 0 0 ${(props) => (props.open ? "40%" : "70%")};
    max-width: ${(props) => (props.open ? "40%" : "70%")};
    transition: max-width 0.4s ease-in-out;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 9999;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 100%;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
const Header = () => {
  const [toggle, toggleNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(-1);
  const [scrollFixed, setScrollFixed] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(1);
      } else {
        setIsScrolled(0);
      }
      if (window.scrollY > 20) {
        setScrollFixed(true);
      } else {
        setScrollFixed(false);
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
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the container element is available
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set initial styles
    gsap.set(container, { opacity: 0, y: 20 });

    // Create the fade-to-top animation
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out", // You can adjust the easing function
    });
  }, []);

  return (
    <MainWrapper className={`${scrollFixed ? "fixed" : ""}`}>
      <Slide top>
        <Wrapper ref={containerRef}>
          <HeaderWrapper>
            <HeaderLogo>
              <img src={Logo} />
            </HeaderLogo>
            <HeaderMenu>
              <MenuBlock>
                <HeaderUl>
                  <HeaderLi>
                    <img src={img1} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img src={img2} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img src={img3} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img src={img4} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img src={img5} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img src={img6} alt="" />
                  </HeaderLi>
                </HeaderUl>
                <p>(Approved by Govt. of India, Ministry of Tourism)</p>
              </MenuBlock>
              <HeaderBar>
                Menu{" "}
                <NavIcon onClick={() => toggleNav(!toggle)}>
                  <Line open={toggle} />
                  <Line open={toggle} />
                  <Line open={toggle} />
                </NavIcon>
              </HeaderBar>
            </HeaderMenu>
          </HeaderWrapper>
        </Wrapper>
      </Slide>
      {/* <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay> */}
    </MainWrapper>
  );
};

const MenuBlock = styled.div``;
const HeaderBar = styled.div`
  font-family: "Rowdies";
  margin: 0 0 0 10px;
  padding: 0 20px;
  border-left: solid 1px #4caf50;
  display: inline-flex;
  align-items: center;
`;
const MainWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* background: rgb(255 255 255 / 20%); */
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: fixed;
  &.fixed {
    padding: 0;
    & > div {
      & > div {
        & > div {
          width: 100%;
        }
      }
    }
  }
  & > div {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div`
  background: rgb(255 255 255 / 60%);
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  padding: 10px 10px;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
`;
const HeaderLogo = styled.div`
  display: flex;
  img {
    max-height: 40px;
  }
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 0 0 0 !important;
  padding: 0 0 0 0 !important;
  justify-content: center;
`;
const HeaderMenu = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  p {
    font-family: "Rubik";
    margin: 5px 0 0 0;
    font-size: 10px;
  }
`;
const HeaderLi = styled.li`
  font-family: "Rubik";
  padding: 0 10px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 16px;
  img {
    max-width: 40px;
  }
`;

export default Header;

