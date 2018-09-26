import React from "react";

const Article = (props) => (
    
    <div className="text-center">
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
      <a href="{props.url}">Read More</a>
    </div>
)



export default Article;