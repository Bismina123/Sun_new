import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Pages/Components/Header/Header";
import Banner from "./Pages/Components/Banner/Banner";
import AboutUs from "./Pages/Components/AboutUsPage/AboutUs";
import WhatweDo from "./Pages/Components/WhatweDo/WhatweDo";
import BackgroundTextMarquee from "./Pages/Components/BackgroundTextMarquee/BackgroundTextMarquee";
import Services from "./Pages/Components/Banner/Services";
import Footer from "./Pages/Components/Banner/Footer";
import AtomClone from "./AtomPage/AtomClone";
import ToursMainPage from "./Pages/Components/ToursMainPage/ToursMainPage";
import Airoplane from "./Pages/Components/Airoplane3d/Airoplane";
import { LandingPage } from "./Pages/Components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AtomClone />} path="/inner-page" />
          <Route element={<ToursMainPage />} path="/tours-page" />
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
