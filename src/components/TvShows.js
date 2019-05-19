import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class TvShows extends Component {
  state = {
    tvshows: [],
    input: ""
  };

  async componentDidMount() {
    const res = await axios.get(`http://api.tvmaze.com/shows`);
    const tvshows = res.data;
    this.setState({
      tvshows: tvshows
    });
  }

  onChangeHandler = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    const { tvshows } = this.state;

    const filteredTvShows = tvshows.filter(tvshow =>
      tvshow.name.toLowerCase().includes(this.state.input.toLowerCase())
    );
    return (
      <div
        className="books-container"
        style={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#1C2A39",
          minHeight: "90vh"
        }}
      >
        <input
          value={this.state.input}
          type="text"
          placeholder="Search..."
          onChange={this.onChangeHandler}
          style={{ height: "2.5rem" }}
        />

        {filteredTvShows.map(tvshow => (
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
