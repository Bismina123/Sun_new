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
import { Loader } from "./Pages/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route element={<LandingPage />} path="/" />
            </Routes>
          </>
        )}
        <Routes>
          <Route element={<AtomClone />} path="/inner-page" />
          <Route element={<ToursMainPage />} path="/tours-page" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
