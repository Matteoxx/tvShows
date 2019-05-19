import React, { Component } from "react";
import TvShows from "./components/TvShows";
import TvShow from "./components/TvShow";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

import fire from "./config/Fire";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    user: null
    // userLoggedIn: false
  };

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      // this.setState({
      //   userLoggedIn: !this.state.userLoggedIn
      // });
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
            <Route
              exact
              path="/"
              // component={this.state.user ? TvShows : Login}
              component={LandingPage}
            />
          </Switch>
          {/* <Switch>
            <Route exact path="/tvshows" component={TvShows} />
          </Switch> */}
          <Switch>
            <Route exact path="/tvshows/:id" component={TvShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
