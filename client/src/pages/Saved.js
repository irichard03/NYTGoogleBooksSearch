import React, { Component } from "react";
import "../App.css";


class Saved extends Component {
  state = {
    savedBooks : []
  }
  
  onComponentDidMount = () => {
    this.queryBooks();
  }
  
  queryBooks = () => {
    alert("I loaded!");
  }

  render() {
    return (
        <div className="Saved">
          <div className="displayBooks">
            <h1>Saved Books</h1>
          </div>
        </div>
     
    );
  }
}

export default Saved;