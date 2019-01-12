import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App blue lighten-1">
          <Nav />
          <h1>Banner</h1>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
