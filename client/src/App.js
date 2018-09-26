import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Article from "./components/Article/Article";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results"

const App = () => (
 
      <Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          {/* <Route exact path="/saved" component={Saved}/> */}
        </div>
      </Router>
 
)

export default App;
