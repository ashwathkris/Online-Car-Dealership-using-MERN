import React from "react";
import logo from "../logo.png";
import { nav_links } from "react-router";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <nav>
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" height="65px" />
          </Link>
        </div>
        <ul className="navlinks">
          <li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/models">Models</Link>
            </li>
            <li>
              <Link to="/sedan">Sedan</Link>
            </li>
            <li>
              <Link to="/suv">SUV</Link>
            </li>
            <li>
              <Link to="/hatch">Hatchback</Link>
            </li>
            <li>
              <Link to="/electric">Electric</Link>
            </li>
          </li>
        </ul>
        <div className="contact">
          <Link to="/book">
            <button
              className="btnUserMenu"
              type="button"
              id="dropdownMenuButton"
            >
              Book a test Ride
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
