import React, { Component } from "react";
import Nav from "./Navbar.js";
import Hatchback from "./hatchback.js";
import Slideshow from "./Slide.js";
import Footer from "./footer.js";

class HATCH extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Hatchback />
        <br />
        <Footer />
      </section>
    );
  }
}

export default HATCH;
