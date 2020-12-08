import { render } from "@testing-library/react";
import React, { Component } from "react";
import Nav from "./Navbar.js";
import "./Book.css";
import { book } from "../services/api";
import Footer from "./footer.js";
import { Link } from "react-router";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      mobnum: "",
      mail: "",
      timeslot: "",
      date: "",
      model: "",
    };
  }

  handlefirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handlemodelChange = (event) => {
    this.setState({
      model: event.target.value,
    });
  };
  handledateChange = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handlelastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handlemobnumChange = (event) => {
    this.setState({
      mobnum: event.target.value,
    });
  };

  handlemailChange = (event) => {
    this.setState({
      mail: event.target.value,
    });
  };

  handlemodelChange = (event) => {
    this.setState({
      model: event.target.value,
    });
  };

  handletimeslotChange = (event) => {
    this.setState({
      timeslot: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    try {
      alert("Booking Recorded");
      console.log(this.state);
      const response = await book(this.state);
      if (response) {
        console.log("successful");
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log("fail ");
    }
  };

  render() {
    return (
      <section>
        <Nav />
        <div className="form-container">
          <center>
            <div className="tr">Book Your Test Ride Today</div>
          </center>
          <div className="content">
            <form>
              <center>
                <div>
                  <label className="formlabel"></label>
                  <input
                    className="forminput"
                    type="text"
                    value={this.state.firstname}
                    onChange={this.handlefirstnameChange}
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div>
                  <label className="formlabel"></label>
                  <input
                    className="forminput"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handlelastnameChange}
                    placeholder="Enter Your Last Name"
                  />
                </div>
                <div>
                  <label className="formlabel"></label>
                  <input
                    className="forminput"
                    type="text"
                    value={this.state.mail}
                    onChange={this.handlemailChange}
                    placeholder="Enter your Mail-ID"
                  />
                </div>

                <div>
                  <label className="formlabel"></label>
                  <input
                    className="forminput"
                    type="text"
                    value={this.state.mobnum}
                    placeholder="Enter Your Mobile Number"
                    onChange={this.handlemobnumChange}
                  />
                </div>

                <div>
                  <label className="formlabel"></label>
                  <input
                    className="forminput"
                    type="date"
                    value={this.state.date}
                    onChange={this.handledateChange}
                  />
                </div>
                <div>
                  <label className="formlabel"></label>
                  <select
                    value={this.state.timeslot}
                    onChange={this.handletimeslotChange}
                    placeholder="Choose Time Slot"
                  >
                    <option value="slot0">Choose Time Slot</option>
                    <option value="slot1">11 AM - 12 PM</option>
                    <option value="slot2">12 PM - 1 PM</option>
                    <option value="slot3">1 PM - 2 PM</option>
                    <option value="slot4">2 PM - 3 PM</option>
                    <option value="slot5">3 PM - 4 PM</option>
                    <option value="slot6">4 PM - 5 PM</option>
                    <option value="slot7">5 PM - 6 PM</option>
                  </select>
                </div>

                <div>
                  <label className="formlabel"></label>
                  <select
                    value={this.state.model}
                    onChange={this.handlemodelChange}
                  >
                    <option value="slot0">Select Car Model</option>
                    <option value="car1" className="op">
                      HYUNDAI VERNA
                    </option>
                    <option value="car2" className="op">
                      SWIFT DZIRE
                    </option>
                    <option value="car3" className="op">
                      TATA NEXON EV
                    </option>
                    <option value="car4" className="op">
                      HYUNDAI TUCSON
                    </option>
                    <option value="car5" className="op">
                      KONA ELECTRIC
                    </option>
                    <option value="car6" className="op">
                      MERCEDES GLE 2000
                    </option>
                    <option value="car7" className="op">
                      HONDA JAZZ
                    </option>
                    <option value="car8" className="op">
                      MERCEDES CLS 800
                    </option>
                    <option value="car9" className="op">
                      TATA TIGER EV
                    </option>
                    <option value="car10" className="op">
                      HONDA CITY
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="but"
                  onClick={this.handleSubmit}
                >
                  SUBMIT
                </button>
              </center>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Book;
