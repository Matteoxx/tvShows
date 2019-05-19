import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

export default class Header extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#303030",
          display: "flex",
          flexDirection: "row",
          color: "white",
          padding: "0.5rem",
          height: "10vh"
        }}
      >
        <span>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            BestFilms
          </Link>
        </span>
        {/* {this.props.userLoggedIn ? ( */}
        <button onClick={this.logout}>Wyloguj</button>
        {/* // ) : null} */}
      </div>
    );
  }
}
