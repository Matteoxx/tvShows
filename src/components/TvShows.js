import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class TvShows extends Component {
  state = {
    tvshows: []
  };

  async componentDidMount() {
    const res = await axios.get(`http://api.tvmaze.com/shows`);
    const tvshows = res.data;
    console.log(tvshows);
    this.setState({
      tvshows: tvshows
    });
  }

  render() {
    const { tvshows } = this.state;
    return (
      <div
        className="books-container"
        style={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#1C2A39"
        }}
      >
        {tvshows.map(tvshow => (
          <div
            key={tvshow.id}
            className="tvshow"
            style={{
              margin: "1rem",
              color: "white"
            }}
          >
            <Link to={`/tvshows/${tvshow.id}`}>
              <img src={tvshow.image.medium} alt="" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
