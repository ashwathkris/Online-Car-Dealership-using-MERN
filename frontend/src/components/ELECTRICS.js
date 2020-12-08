import React, { Component } from "react";
import Nav from "./Navbar.js";
import Electric from "./electric.js";
import Slideshow from "./Slide.js";
import Footer from "./footer.js";

class ELECTRICS extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Electric />
        <br />
        <Footer />
      </section>
    );
  }
}

export default ELECTRICS;
