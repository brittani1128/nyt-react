import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Article } from "../../components/Article/Article";


class Results extends Component {
  state = {
    books: [],
    title: "",
    url: "",
    summary: ""
  };

  componentDidMount() {
    this.loadResults();
  }

  loadResults= () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <div>
        
        
      </div>
    );
  }
}

export default Results;
