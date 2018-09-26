import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results"
import Saved from "./pages/Saved/Saved"


import NoMatch from "./pages/NoMatch/NoMatch";

const App = () => (
 
      <Router >
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/saved" component={Saved}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
 
)

export default App;
