import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#303030",
          display: "flex",
          flexDirection: "row",
          color: "white",
          padding: "0.5rem"
        }}
      >
        <span>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            TheBestFilms
          </Link>
        </span>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            justifyContent: "flex-end"
          }}
        >
          <li>
            <Link
              to="/tvshows"
              style={{ textDecoration: "none", color: "white", margin: "5px" }}
            >
              TvShows
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white", margin: "5px" }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
