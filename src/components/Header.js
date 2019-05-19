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
          backgroundColor: "#ff4b2b",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "white",
          padding: "0.5rem",
          height: "10vh",
          textAlign: "center"
        }}
      >
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

        <button
          onClick={this.logout}
          style={{
            bordeeRadius: "20px",
            border: "1px solid #ff4b2b",
            backgroundColor: "#fff",
            color: "#ff4b2b",
            fontSize: "12px",
            fontWeight: "bold",
            padding: "5px 10px",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}
        >
          Wyloguj
        </button>
        {/* // ) : null} */}
      </div>
    );
  }
}
