import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Saved extends Component {
  state = {
    savedBooks : []
  }
  
  componentDidMount(){
   this.queryBooks();
  }
  
  queryBooks = () => {
    axios.get("/api/books")
      .then((response) => {
        console.log(response);
      }).catch((error) =>{
        console.log(error);
      });
  }

  render() {
    return (
        <div className="Saved">
          <div className="displayBooks">
            <button class="btn waves-effect waves-light blue" onClick={this.queryBooks}>Get Saved Books</button>
          </div>
        </div>
    );
  }
}

export default Saved;