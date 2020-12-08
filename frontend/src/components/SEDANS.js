import React, { Component } from "react";
import Nav from "./Navbar.js";
import Sedan from "./sedan.js";
import Slideshow from "./Slide.js";
import Footer from "./footer.js";

class SEDANS extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Sedan />
        <br />
        <Footer />
      </section>
    );
  }
}

export default SEDANS;
