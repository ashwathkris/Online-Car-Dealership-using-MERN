import React from "react";
import axios from "axios";
import "./index.css";
import h1 from "../images/h1.jpg";
import h2 from "../images/hatch2.jpg";
import h3 from "../images/h3.png";
import h4 from "../images/hatch4.jpg";

var carNames = ["", " ", " ", " "];
var carPrice = ["", " ", " ", " "];
var carDesc = ["", " ", " ", " "];

class Hatchback extends React.Component {
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
            <h1 className="heading">Hatchback</h1>
            <br />
            <div className="image1">
              <img src={h1} alt="1" width="400px" />
              <p>
                <b>{carNames[8]}</b>
              </p>
              <p>{carPrice[8]}</p>
              <p>{carDesc[8]}</p>
            </div>
            <div className="image2">
              <img src={h2} alt="1" width="350px" />
              <p>
                <b>{carNames[9]}</b>
              </p>
              <p>{carPrice[9]}</p>
              <p>{carDesc[9]}</p>
            </div>
            <br />
            <div className="image1">
              <img src={h3} alt="1" width="400px" />
              <p>
                <b>{carNames[10]}</b>
              </p>
              <p>{carPrice[10]}</p>
              <p>{carDesc[10]}</p>
            </div>
            <div className="image2">
              <img src={h4} alt="1" width="330px" />
              <p>
                <b>{carNames[11]}</b>
              </p>
              <p>{carPrice[11]}</p>
              <p>{carDesc[11]}</p>
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

export default Hatchback;
