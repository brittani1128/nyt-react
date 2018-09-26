import React from "react";

const styles = {
  card: {
    margin:"10px"
  },
  h4: {
    fontSize:"20px"
  }
}

const Article = (props) => (
    <div className="card" style={styles.card}>
      <div className="card-header">
        <h4 style={styles.h4}>{props.title}</h4>
        </div>
        <div className="card-body">
        <p>{props.summary}</p>
        <a href="{props.url}">Read More</a>
        </div>
       
      
    </div>
)



export default Article;