import React, { Component } from "react";
import { render } from "react-dom";
import MainPage from "./MainPage";
import SearchPage from "./isauth/SearchPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";



export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);