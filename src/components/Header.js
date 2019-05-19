import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

import "./css/Header.css";

export default class Header extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div id="header-container">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0",
            fontSize: "1.8rem"
          }}
        >
          BestFilms
        </Link>

        <button onClick={this.logout}>
          <Link
            to="/"
            style={{
              margin: "0",
              padding: "0",
              textDecoration: "none",
              color: "#ff4b2b"
            }}
          >
            Wyloguj{" "}
          </Link>
        </button>
      </div>
    );
  }
}
