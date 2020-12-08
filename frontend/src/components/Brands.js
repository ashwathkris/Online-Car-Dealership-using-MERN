import im1 from "../images/benz.png";
import im2 from "../images/honda.png";
import im3 from "../images/bmw.png";
import React from "react";
import im4 from "../images/suzuki.png";
import im5 from "../images/hyundai.png";
import "./Brands.css";

function Brands() {
  return (
    <section>
      <div className="logo-listing">
        <h2 className="brandshead">BRANDS WE OFFER</h2>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="img">
          <img src={im1} alt="W3Schools.com" width="220" />
        </div>
        <div className="img">
          <img src={im5} alt="W3Schools.com" width="240" />
        </div>
        <div className="img">
          <img src={im2} alt="W3Schools.com" width="240" height="150px" />
        </div>
        <div className="img">
          <img src={im3} alt="W3Schools.com" width="250" />
        </div>
        <div className="img">
          <img src={im4} alt="W3Schools.com" width="260" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
