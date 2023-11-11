import "./BannerClouds.css";
import styled from "styled-components";
import cloud1 from "./assets/img/clouds/1.png";
import cloud2 from "./assets/img/clouds/2.png";
import cloud3 from "./assets/img/clouds/3.png";
import cloud4 from "./assets/img/clouds/4.png";
import cloud5 from "./assets/img/clouds/5.png";
const BannerClouds = () => {
  return (
    <CloudsMain>
      <Clouds>
        <CloudsBlock className="cloud cloud1">
          <img src={cloud1} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud2">
          <img src={cloud2} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud3">
          <img src={cloud3} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud4">
          <img src={cloud4} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud5">
          <img src={cloud5} alt="" />
        </CloudsBlock>
      </Clouds>
      <Clouds>
        <CloudsBlock className="cloud cloud1">
          <img src={cloud1} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud2">
          <img src={cloud2} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud3">
          <img src={cloud3} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud4">
          <img src={cloud4} alt="" />
        </CloudsBlock>
        <CloudsBlock className="cloud cloud5">
          <img src={cloud5} alt="" />
        </CloudsBlock>
      </Clouds>
    </CloudsMain>
  );
};

export default BannerClouds;
const CloudsMain = styled.div`
  grid-column-gap: 1rem;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Clouds = styled.div`
  grid-column-gap: 1rem;
  min-width: 100%;
  /* flex: none;
  justify-content: space-around;
  display: flex; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;  
  img {
    width: auto;
    max-height: 100%;
  }
`;
const CloudsBlock = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  max-height: 20%;
  display: flex;
  &:nth-child(1){
    margin: 15px 0 -10% -5%;
    max-height: 30%;
  }
  &:nth-child(2){
    justify-content: center;
  }
  &:nth-child(3){
    justify-content: flex-end;
  }
  &:nth-child(4){
    margin: -20% 0 0 5%;
    max-height: 35%;
  }
  &:nth-child(5){
    justify-content: center;
    margin: -15% 0 0 10%;
    max-height: 35%;
  }
`;
