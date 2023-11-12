import styled from "styled-components";
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style
import "@fontsource/lilita-one"; // Defaults to weight 400
import "@fontsource/lilita-one/400.css"; // Specify weight
// import "@fontsource/lilita-one/400-italic.css"; // Specify weight and style

import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style

import "@fontsource/rowdies"; // Defaults to weight 400
import "@fontsource/rowdies/400.css"; // Specify weight

import hajj from "./assets/img/hajj.png";
import pattern from "./assets/img/pattern.png";
import light from "./assets/img/light.png";
import hajjBg from "./assets/img/hajj-bg.png";
const Hajj = () => {
  return (
    <MainWrapper>
      <Row>
        <Row50>
          <RowBlock>
            <img src={hajj} alt="" />
          </RowBlock>
        </Row50>
        <Row50>
          <RowFull>
            <RowCenter>
              <h4>This Hajj Season</h4>
              <p>
                Look to the sky{" "}
                <span>
                  with <a>Sun Travels</a>
                </span>
              </p>
            </RowCenter>
          </RowFull>
        </Row50>
      </Row>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  z-index: 0;
  position: relative;
`;
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  position: relative;
  z-index: 3;
  /* background-image: url(${hajjBg});
  background-position: left;
    background-repeat: no-repeat;
    background-size: cover; */
  background: rgb(202, 221, 234);
  background: linear-gradient(
    17deg,
    rgba(202, 221, 234, 1) 0%,
    rgba(2, 50, 139, 1) 100%
  );
  &::before {
    content: "";
    background-image: url(${pattern});
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.08;
    z-index: 0;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 80%;
  }
  h4 {
    font-size: 2.2vw;
    font-weight: 700;
    color: #ffffff;
    text-align: left;
    font-family: "Rowdies";
    letter-spacing: 0.5px;
    transition: opacity 2.3s;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    color: #ffffff;
    line-height: 1.5;
    letter-spacing: 0;
    font-size: 2.6vw;
    max-width: 500px;
    text-align: left;
    margin: 0;
    padding: 8px 0 0 0;
    font-weight: 500;
    text-transform: uppercase;
    font-family: "Rowdies";
    span {
      display: block;
      font-size: 2vw;
      a {
        color: #ffc107;
      }
    }
  }
`;
const Row30 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
`;
const Row70 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 70%;
  flex: 0 0 70%;
  max-width: 70%;
`;
const Row50 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  &:nth-child(1) {
    padding: 10% 0 0 0;
    &::before {
      content: "";
      background-image: url(${light});
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 1;
      z-index: -1;
      background-position: top left;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
const Row33 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
`;
const RowBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;
const RowCenter = styled.div`
  margin: 0 0 0 -15%;
`;
const RowFull = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hajj;
