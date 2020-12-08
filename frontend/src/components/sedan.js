import React from "react";
import axios from "axios";
import "./index.css";
import Sedan1 from "../images/sedan1.jpg";
import Sedan2 from "../images/sed2.jpg";
import Sedan3 from "../images/sedan3.jpg";
import Sedan4 from "../images/sedan4.jpg";

var carNames = ["", " ", " ", " "];
var carPrice = ["", " ", " ", " "];
var carDesc = ["", " ", " ", " "];

class Sedan extends React.Component {
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
      <>
        {this.setData(this.state.posts)}
        <div className="App">
          <br />
          <div className="backg">
            <br />
            <h1 className="heading">Sedan</h1>
            <br />
            <div className="image1">
              <img src={Sedan1} alt="1" />
              <p>
                <b>{carNames[0]}</b>
              </p>
              <p>{carPrice[0]}</p>
              <p>{carDesc[0]}</p>
            </div>
            <div className="image2">
              <img src={Sedan2} alt="1" />
              <p>
                <b>{carNames[1]}</b>
              </p>
              <p>{carPrice[1]}</p>
              <p>{carDesc[1]}</p>
            </div>
            <br />
            <div className="image1">
              <img src={Sedan3} alt="1" width="400px" />
              <p>
                <b>{carNames[2]}</b>
              </p>
              <p>{carPrice[2]}</p>
              <p>{carDesc[2]}</p>
            </div>
            <div className="image2">
              <img src={Sedan4} alt="1" width="350px" height="240px" />
              <p>
                <b>{carNames[3]}</b>
              </p>
              <p>{carPrice[3]}</p>
              <p>{carDesc[3]}</p>
              <br />
            </div>
          </div>
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default Sedan;
