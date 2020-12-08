import React from "react";
import image1 from "../images/ss1.jpg";
import image2 from "../images/ss2.png";
import image3 from "../images/ss3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slide.css";

const slideImages = [image1, image2, image3];
function Slideshow() {
  return (
    <div>
      <center>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
      </center>
    </div>
  );
}

export default Slideshow;
