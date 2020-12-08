import React from "react";
import axios from "axios";
import "./index.css";
import Electric1 from "../images/electric1.jpg";
import Electric2 from "../images/elect4.jpg";
import Electric3 from "../images/e3.jpg";
import Electric4 from "../images/e4.jpg";

var carNames = ["", "", "", ""];
var carPrice = ["", " ", " ", " "];
var carDesc = ["", " ", " ", " "];

class Electric extends React.Component {
  state = {
    posts: [], //accepts data
  };

  componentDidMount = () => {
    //calls the getCar fn as soon as the component is executed.
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
    posts.map((post, index) => this.setCarData(post, index)); //iterates through all the data.
  };

  render() {
    return (
      <>
        {this.setData(this.state.posts)}
        <div className="App">
          <br />
          <div className="backg">
            <br />
            <h1 className="heading">Electric</h1>
            <br />
            <div className="image1">
              <img src={Electric1} alt="1" />
              <p>
                <b>{carNames[4]}</b>
              </p>
              <p>{carPrice[4]}</p>
              <p>{carDesc[4]}</p>
            </div>
            <div className="image2">
              <img src={Electric2} alt="1" width="410px" />
              <center>
                <p>
                  <b>{carNames[5]}</b>
                </p>
                <p>{carPrice[5]}</p>
                <p>{carDesc[5]}</p>
              </center>
            </div>
            <br />
            <div className="image1">
              <img src={Electric3} alt="1" />
              <p>
                <b>{carNames[6]}</b>
              </p>
              <p>{carPrice[6]}</p>
              <p>{carDesc[6]}</p>
            </div>
            <div className="image2">
              <img src={Electric4} alt="1" width="360px" height="260px" />
              <p>
                <b>{carNames[7]}</b>
              </p>
              <p>{carPrice[7]}</p>
              <p>{carDesc[7]}</p>
              <br />
            </div>
          </div>
          <br></br>
        </div>
      </>
    );
  }
}

export default Electric;
