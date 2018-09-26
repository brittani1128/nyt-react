import React, {Component} from "react";

class Article extends Component {
  state = {

  };
  
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