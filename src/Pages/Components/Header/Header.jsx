import { useState, useEffect } from "react";
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
const Header = () => {
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
  
  return (
    <MainWrapper>
      <Wrapper>
        <HeaderWrapper>
          <HeaderLogo>
            <img src={Logo} />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderUl>
              <HeaderLi><img src={img1} alt=""/></HeaderLi>
              <HeaderLi><img src={img2} alt=""/></HeaderLi>
              <HeaderLi><img src={img3} alt=""/></HeaderLi>
              <HeaderLi><img src={img4} alt=""/></HeaderLi>
              <HeaderLi><img src={img5} alt=""/></HeaderLi>
              <HeaderLi><img src={img6} alt=""/></HeaderLi>
            </HeaderUl>
          </HeaderMenu>
        </HeaderWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  margin: 0 0 -90px 0;
  padding: 20px 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;
const HeaderLogo = styled.div({});
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
const HeaderMenu = styled.div``;
const HeaderLi = styled.li`
  font-family: "Rubik";
  padding: 0 15px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 16px;
  img{
    max-width: 50px;
  }
`;

export default Header;
