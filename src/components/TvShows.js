import React, { Component } from "react";
import axios from "axios";

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
            className="tvshow"
            style={{
              margin: "1rem",
              color: "white"
            }}
          >
            <img src={tvshow.image.medium} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
