import React, { Component } from "react";
import TvShows from "./components/TvShows";
import TvShow from "./components/TvShow";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/tvshows" component={TvShows} />
          </Switch>
          <Switch>
            <Route exact path="/tvshows/:id" component={TvShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
