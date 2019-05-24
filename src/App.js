import React, { Component } from "react";
import TvShows from "./components/TvShows";
import TvShow from "./components/TvShow";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import { ProtectedRoute } from "./components/protected.route";

import fire from "./config/Fire";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.user ? <Header /> : null}

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/tvshows" component={TvShows} />
            <ProtectedRoute exact path="/tvshows/:id" component={TvShow} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
