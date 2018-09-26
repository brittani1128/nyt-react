import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

class Home extends Component {
  state = {
    referrer: null
  }

  // On click event to scrape articles
  handleOnClick = event => {
    this.setState({referrer: '/results'});

    API.scrapeArticles()
      .then(res => {
        console.log(res.data)
      .catch(err => console.log(err));

      })
  }


  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;
    return(
        <div className="text-center" style={{marginTop:"50px"}}>
            <h1>NYT SCRAPER</h1>

            {/* <Link to="/api/scrape">Scrape</Link> */}
            <button onClick={this.handleOnClick}>Get Articles!</button>
        </div>
    )
  }

}
export default Home;
