import "../WhatweDo/whatweDo.css";
import umbrella from "./../../../assets/8633-removebg-preview.png";
// import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
const WhatweDo = () => {
  return (
    <div className="container--large">
      <div className="our-story-intro__wrapper">
        <div className="about-us__intro-wrapper">
          <div className="margin--bottom margin--48">
          {/* <Fade bottom duration={2000}> */}
              <h2>
                <br />
                Your Vision
                <br />
                Our Expertise
              </h2>
            {/* </Fade> */}
          </div>
          <div className="margin--bottoms margin--2">
          {/* <Flip bottom duration={4000}> */}
            <div>
              <p>
                We offer a range of travel solutions that cater to a vast array
                of customers – both in the corporate and leisure travel market.
                We have established a reputation in the industry for having
                strong and long lasting relationships with both our suppliers
                and clients. Our services include flights, hotel accommodation,
                airport parking facilities, travel insurance and so on, thereby
                providing fully-fledged and hassle-free travel arrangements.</p>
            </div>
            {/* </Flip> */}
          </div>
          {/* <Fade left duration={2000}> */}
            <div className="our-story__grvy-img">
              <img src={umbrella} alt="" />
            </div>
          {/* </Fade> */}
          {/* <Fade right duration={2000}> */}
            <div className="our-story__grvy-text">
              <div className="heading-tag--small ">
                Adventure Awaits
                <br />
                Are You Ready?
              </div>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
