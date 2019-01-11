import React, { Component } from "react";
import "../App.css";
import Search from "../pages/Search";
import Saved from "../pages/Saved";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
        <div className="Nav">
             <ul>
                <li>
                    <Link to="/">Search</Link>
                </li>
                <li>
                    <Link to="/about">Saved</Link>
                </li>
            </ul>
        </div>
    );
  }
}

export default Nav;