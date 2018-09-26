import React, { Component } from "react";
import API from "../../utils/API";
import Article from "../../components/Article/Article";




class Results extends Component {
  state = {
    articles: [],
    title: "",
    url: "",
    summary: ""
  };

  componentDidMount() {
    this.loadResults();
  };

  loadResults= () => {

    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", url: "", summary: "" })
      )
      .catch(err => console.log(err));
   
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
        {/* <Navbar /> */}
        <div className="jumbotron">
                <h2 className="text-center">Results</h2>
            </div>
        <div className="container">
            
            {this.state.articles.map(article => (
                <Article 
                    id={article.id}
                    key={article.id}
                    title={article.title}
                    url={article.url}
                    summary={article.summary}
                />
            ))}
            
          </div>
      </div>
    );
  }
}

export default Results;
