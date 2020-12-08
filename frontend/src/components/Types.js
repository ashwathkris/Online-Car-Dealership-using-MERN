import React from "react";
import img1 from "../images/t1.jpg";
import img2 from "../images/t2.jpg";
import img3 from "../images/t3.jpg";
import img4 from "../images/t4.jpg";
import "./Types.css";
import { Link } from "react-router-dom";

function Type() {
  return (
    <section>
      <div class="type">
        <h2 class="brandshead">CHOOSE BY CATEGORY</h2>
        <br />
        <br />
        <Link to="/sedan">
          <img
            class="tran"
            src={img1}
            alt="W3Schools.com"
            width="640"
            height="380"
          />
        </Link>
        <Link to="/suv">
          <img
            class="tran"
            src={img2}
            alt="W3Schools.com"
            width="640"
            height="380"
          />
        </Link>
        <Link to="/hatch">
          <img
            class="tran"
            src={img3}
            alt="W3Schools.com"
            width="640"
            height="380"
          />
        </Link>
        <Link to="/electric">
          <img
            class="tran"
            src={img4}
            alt="W3Schools.com"
            width="640"
            height="380"
          />
        </Link>
      </div>
    </section>
  );
}

export default Type;
