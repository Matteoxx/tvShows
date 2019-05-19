import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

import "./LandingPage.css";

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
          this.props.history.push("/");
        })
        .catch(error => {});
    }
  };

  render() {
    return (
      <div
        id="container"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/133070/pexels-photo-133070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            margin: "0.7rem"
          }}
        >
          Welcome to BestFilms
        </h1>
        <div
          className="form-container"
          style={{
            backgroundColor: "white",
            // border: "1px solid black",
            padding: "0 1.5rem 0.5rem 1.5rem",
            borderRadius: "10px",
            boxShadow:
              "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
          }}
        >
          <form>
            <h1>Sign Up</h1>
            <p style={{ margin: "0" }}>
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
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div>
              <input
                value={this.state.repPassword}
                onChange={this.handleChange}
                type="password"
                name="repPassword"
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
            <div>
              {this.state.errors.passwordsDiffer ? (
                <span
                  style={{ color: "red", fontSize: "12px", textAlign: "left" }}
                >
                  {this.state.errors.passwordsDiffer}
                </span>
              ) : null}
              {this.state.errors.passwordLength ? (
                <span
                  style={{ color: "red", fontSize: "12px", textAlign: "left" }}
                >
                  {this.state.errors.passwordLength}
                </span>
              ) : null}
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                Already have an account?
                <Link exact to="/" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#ff4b2b" }}> Sign in</span>
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
