import React, { Component } from "react";
import Models from "./Models.js";
import Nav from "./Navbar.js";
import Footer from "./footer.js";
import Slideshow from "./Slide.js";

class MODEL extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Models />
        <br />
        <br />
        <Footer />
      </section>
    );
  }
}

export default MODEL;
