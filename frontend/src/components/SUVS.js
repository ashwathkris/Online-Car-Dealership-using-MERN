import React, { Component } from "react";
import Nav from "./Navbar.js";
import Suv from "./suv.js";
import Slideshow from "./Slide.js";
import Footer from "./footer.js";

class SUVS extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Suv />
        <br />
        <Footer />
      </section>
    );
  }
}

export default SUVS;
