import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Book from "./components/Book.js";
import SUVS from "./components/SUVS.js";
import SEDANS from "./components/SEDANS.js";
import HATCH from "./components/HATCH.js";
import ELECTRICS from "./components/ELECTRICS.js";
import MODEL from "./components/MODEL.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/book" component={Book}></Route>
        <Route path="/suv" component={SUVS}></Route>
        <Route path="/sedan" component={SEDANS}></Route>
        <Route path="/hatch" component={HATCH}></Route>
        <Route path="/electric" component={ELECTRICS}></Route>
        <Route path="/models" component={MODEL}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    );
  }
}

export default App;
