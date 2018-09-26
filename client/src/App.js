import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Article from "./components/Article/Article";
import Home from "./pages/Home/Home";

const App = () => (
 
      <Router >
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/results" component={Results} /> */}

          {/* <Article /> */}
        </div>
      </Router>
 
)

export default App;
