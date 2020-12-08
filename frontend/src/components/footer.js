import React from "react";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="foot">
        <div className="text">
          <span className="Txt">About Us | Contact Us | Legal Disclaimer</span>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="/" class="fa fa-facebook"></a>
          <a href="/" class="fa fa-twitter"></a>
          <a href="/" class="fa fa-instagram"></a>
          <a href="/" class="fa fa-linkedin"></a>
          <p className="copy">
            Copyright 2020 AHK Motor India. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
