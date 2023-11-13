import React from "react";
import Header from "../Header/Header";
import Airoplane from "../Airoplane3d/Airoplane";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUsPage/AboutUs";
import WhatweDo from "../WhatweDo/WhatweDo";
import Services from "../Banner/Services";
import Footer from "../Banner/Footer";
import Hajj from "../Banner/Hajj";

export const LandingPage = () => {
  return (
    <>
      <Header />
      {/* <Airoplane /> */}
      <Landing>
        <Banner />
        <AboutUs />
        <WhatweDo />

        <Services />

       
      </Landing>
      <Hajj />
      <Footer />
    </>
  );
};
const Landing = styled.div`
  background-image: linear-gradient(
    to right top,
    #c2bfbf,
    #b8c4f8,
    #6781a9,
    #356a96,
    #3288b6
  );
  /* background: rgb(194, 191, 191);
  background: linear-gradient(
    17deg,
    rgba(194, 191, 191, 1) 0%,
    rgba(141, 139, 217, 1) 23%,
    rgba(50, 136, 182, 1) 100%
  ); */
`;
