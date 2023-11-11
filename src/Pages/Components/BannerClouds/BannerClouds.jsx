import "./BannerClouds.css";
import styled from "styled-components";
import cloud1 from "./assets/img/clouds/1.png";
import cloud2 from "./assets/img/clouds/2.png";
import cloud3 from "./assets/img/clouds/2.png";
import cloud4 from "./assets/img/clouds/2.png";
import cloud5 from "./assets/img/clouds/2.png";
const BannerClouds = () => {
  return (
    <Clouds>
      <CloudsBlock className="cloud x1">
        <img src={cloud1} alt="" />
      </CloudsBlock>
      <CloudsBlock className="cloud x2">
        <img src={cloud2} alt="" />
      </CloudsBlock>
      <CloudsBlock className="cloud x3">
        <img src={cloud3} alt="" />
      </CloudsBlock>
      <CloudsBlock className="cloud x4">
        <img src={cloud4} alt="" />
      </CloudsBlock>
      <CloudsBlock className="cloud x5">
        <img src={cloud5} alt="" />
      </CloudsBlock>
    </Clouds>
  );
};

export default BannerClouds;
const Clouds = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    width: 100%;
    max-width: 500px;
  }
`;
const CloudsBlock = styled.div``;
