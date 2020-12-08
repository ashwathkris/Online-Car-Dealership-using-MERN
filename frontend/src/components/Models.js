import React from "react";
import "./index.css";
import Sedan1 from "../images/sedan1.jpg";
import Sedan2 from "../images/sed2.jpg";
import Sedan3 from "../images/sedan3.jpg";
import Sedan4 from "../images/sedan4.jpg";
import Suv1 from "../images/suv1.jpg";
import Suv2 from "../images/suv23.jpg";
import Suv3 from "../images/suv3.png";
import Suv4 from "../images/suv4.jpg";
import h1 from "../images/h1.jpg";
import h2 from "../images/hatch2.jpg";
import h3 from "../images/h3.png";
import h4 from "../images/hatch4.jpg";
import Electric1 from "../images/electric1.jpg";
import Electric2 from "../images/elect4.jpg";
import Electric3 from "../images/e3.jpg";
import Electric4 from "../images/e4.jpg";

class Models extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <div className="backg1">
          <br />
          <p className="heading">Models</p>
          <br />
          <div className="image">
            <img src={Sedan1} alt="1" />
            <div className="name">
              <p>
                <b>VERNA</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Sedan2} alt="1" />
            <div className="name">
              <p>
                <b>ELANTRA</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Sedan3} alt="1" />
            <div className="name">
              <p>
                <b>SWIFT DZIRE</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Sedan4} alt="1" />
            <div className="name">
              <p>
                <b>CLA 250 BASE</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Suv1} alt="1" />
            <div className="name">
              <p>
                <b>TUCSON</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Suv2} alt="1" />
            <div className="name">
              <p>
                <b>JAZZ</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Suv3} alt="1" />
            <div className="name">
              <p>
                <b>VENUE</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Suv4} alt="1" />
            <div className="name">
              <p>
                <b>GLE 2000</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={h1} alt="1" />
            <div className="name">
              <p>
                <b>GRAND i10</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={h2} alt="1" />
            <div className="name">
              <p>
                <b>SWIFT</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={h3} alt="1" />
            <div className="name">
              <p>
                <b>GRAND i20</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Electric1} alt="1" />
            <div className="name">
              <p>
                <b>KONA Electric</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Electric3} alt="1" width="320px" />
            <div className="name">
              <p>
                <b>TIGOR EV</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Electric4} alt="1" width="300px" />
            <div className="name">
              <p>
                <b>MG ZS EV</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={h4} alt="1" height="50px" />
            <div className="name">
              <p>
                <b>Honda Brio</b>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Electric2} alt="1" width="350px" />
            <div className="name">
              <p>
                <b>Tata Nexon EV</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Models;
