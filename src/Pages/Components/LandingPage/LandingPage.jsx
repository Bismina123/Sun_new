import React from "react";
import Header from "../Header/Header";
import Airoplane from "../Airoplane3d/Airoplane";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUsPage/AboutUs";
import WhatweDo from "../WhatweDo/WhatweDo";
import Services from "../Banner/Services";
import Footer from "../Banner/Footer";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Airoplane />
      <Landing>
        <Banner />
        <AboutUs />
        <WhatweDo />
        <Services />
        <Footer />
      </Landing>
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
`;
