import React, { Component } from "react";
import Brands from "./Brands.js";
import Type from "./Types.js";
import Nav from "./Navbar.js";
import Slideshow from "./Slide.js";
import Footer from "./footer.js";
import { Link } from "react-router";

class Home extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Slideshow />
        <br />
        <Type />
        <br />
        <Brands />
        <Footer />
      </section>
    );
  }
}

export default Home;
