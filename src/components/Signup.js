import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

import "./css/LandingPage.css";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
    repPassword: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    const { password, repPassword } = this.state;

    if (password !== repPassword) {
      this.setState({
        errors: { passwordsDiffer: "Passwords do not match!" }
      });
      return;
    }

    if (password.length < 6) {
      this.setState({
        errors: {
          passwordLength: "Password must be at least 6 characters length!"
        }
      });
      return;
    } else {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .then(u => {
          this.props.history.push("/tvshows");
        })
        .catch(error => {});
    }
  };

  render() {
    return (
      <div id="container">
        <h1 className="welcome">Welcome to BestFilms</h1>
        <div className="form-container">
          <form>
            <h1 className="form-title">Sign Up</h1>
            <p className="form-desc">
              Please enter your details to create an account
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
                placeholder="Password"
              />
            </div>

            <div>
              <input
                value={this.state.repPassword}
                onChange={this.handleChange}
                type="password"
                name="repPassword"
                placeholder="Password"
              />
            </div>
            <div>
              {this.state.errors.passwordsDiffer ? (
                <span className="error-msg">
                  {this.state.errors.passwordsDiffer}
                </span>
              ) : null}
              {this.state.errors.passwordLength ? (
                <span className="error-msg">
                  {this.state.errors.passwordLength}
                </span>
              ) : null}
              <p>
                Already have an account?
                <Link exact to="/" style={{ textDecoration: "none" }}>
                  <span> Sign in</span>
                </Link>
              </p>
              <button type="submit" onClick={this.signup}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
