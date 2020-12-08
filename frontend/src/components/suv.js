import React from "react";
import axios from "axios";
import "./index.css";
import Suv1 from "../images/suv1.jpg";
import Suv2 from "../images/suv23.jpg";
import Suv3 from "../images/suv3.png";
import Suv4 from "../images/suv4.jpg";

var carNames = ["", " ", " ", " "];
var carPrice = ["", " ", " ", " "];
var carDesc = ["", " ", " ", " "];

class Suv extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getCar();
  };

  getCar() {
    axios
      .get("http://localhost:5000/api/users/cars")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        console.log("Error retrieving data!!!");
      });
  }

  setCarData = (post, index) => {
    carNames[index] = post.name;
    carPrice[index] = post.price;
    carDesc[index] = post.description;
  };

  setData = (posts) => {
    if (!posts.length) return null;
    posts.map((post, index) => this.setCarData(post, index));
  };

  render() {
    return (
      <section>
        {this.setData(this.state.posts)}
        <div className="App">
          <br />
          <div className="backg">
            <br />
            <h1 className="heading">SUV</h1>
            <br />
            <div className="image1">
              <img src={Suv1} alt="1" />
              <p>
                <b>{carNames[12]}</b>
              </p>
              <p>{carPrice[12]}</p>
              <p>{carDesc[12]}</p>
            </div>
            <div className="image2">
              <img src={Suv2} alt="1" width="390px" />
              <p>
                <b>{carNames[13]}</b>
              </p>
              <p>{carPrice[13]}</p>
              <p>{carDesc[13]}</p>
            </div>
            <br />
            <div className="image1">
              <img src={Suv3} alt="1" />
              <p>
                <b>{carNames[14]}</b>
              </p>
              <p>{carPrice[14]}</p>
              <p>{carDesc[14]}</p>
            </div>
            <div className="image2">
              <img src={Suv4} alt="1" width="380px" />
              <p>
                <b>{carNames[15]}</b>
              </p>
              <p>{carPrice[15]}</p>
              <p>{carDesc[15]}</p>
              <br />
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default Suv;
