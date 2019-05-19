import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

import "./LandingPage.css";

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
            padding: "0 1.5rem 0.5rem 1.5rem",
            borderRadius: "10px",
            boxShadow:
              "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
          }}
        >
          <form>
            <h1>Sign In</h1>
            <p style={{ margin: "0" }}>
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
                <span
                  style={{ color: "red", fontSize: "12px", textAlign: "left" }}
                >
                  {this.state.errors.incorrectData}
                </span>
              ) : null}
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#ff4b2b" }}>Sign up</span>
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
