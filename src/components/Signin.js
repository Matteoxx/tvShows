import React, { Component } from "react";
import fire from "../config/Fire";

import "./LoginLandingPage.css";

export default class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
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
            fontSize: "56px",
            color: "white",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
          }}
        >
          Welcome to BestFilms
        </h1>
        <div
          className="form-container"
          style={{
            backgroundColor: "white",
            // border: "1px solid black",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow:
              "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
          }}
        >
          <form>
            <h1>Sign In</h1>
            <p>Please enter your email and password to log in</p>
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
              <p>
                Don't have an account?{" "}
                <span style={{ color: "#ff4b2b" }}>Sign up</span>
              </p>
              <button type="submit" onClick={this.login}>
                Sign In
              </button>
              {/* <button onClick={this.signup} style={{ marginLeft: "25px" }}>
                Signup
              </button> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
