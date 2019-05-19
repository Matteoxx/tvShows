import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

import "./css/LandingPage.css";

export default class LandingPage extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          errors: { incorrectData: "Incorrect email or password!" }
        });
      });
  };

  render() {
    return (
      <div id="container">
        <h1 className="welcome">Welcome to BestFilms</h1>
        <div className="form-container">
          <form>
            <h1 className="form-title">Sign In</h1>
            <p className="form-desc">
              Please enter your email and password to log in
            </p>
            <div>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                placeholder="Enter email"
                id="exampleInputEmail"
              />
            </div>

            <div>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div>
              {this.state.errors.incorrectData ? (
                <span className="error-msg">
                  {this.state.errors.incorrectData}
                </span>
              ) : null}
              <p>
                Don't have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span>Sign up</span>
                </Link>
              </p>
              <button type="submit" onClick={this.login}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
