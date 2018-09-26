import React, {Component} from "react";

class Article extends Component {
  state = {
    articles: []
  };

  componentDidMount(){
    fetch("/api/articles")
      .then(res => res.json)
      .then(articles => this.setState({articles}, () => console.log("articles fetched", articles)));
  }
  
  render() {
    return(
    <div className="text-center">
      <h1>Article Title</h1>
      <p>summary goes here</p>
      <a href="#">url to article</a>
    </div>
    )
  }
}
 


export default Article;