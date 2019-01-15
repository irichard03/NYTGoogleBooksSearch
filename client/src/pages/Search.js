import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Search extends Component {
  state = {
    search: "",
    booklist: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  formSubmit = (event) => {
    event.preventDefault();
    if(this.state.search){
      this.getBooks(this.state.search);
    }
    else{
      this.getBooks("20,000 Leagues under the sea");
    }    
  };

  getBooks = (query) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`, )
      .then(res => {
        let list = res.data;
        let tempArray = [];
        let book = {
          id: 11,
          title: "",
          authors: [],
          description: "",
          image: "",
          link: "",


        }
        for(let i = 0; i < 10; i++){
        
        }
        
      });
  };


  render() {
    return (
        <div className="Search">
          <div className="booksDisplay">
              <form className="searchBox">
                  <div class="input-field">
                  <input
                    type="text"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                  />
                    <button class="btn waves-effect waves-light blue" onClick={this.formSubmit}>Submit</button>
                  </div>
              </form>

          </div>
        </div>
     
    );
  }
}

export default Search;