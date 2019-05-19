import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./css/TvShows.css";

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
      <div id="book-container">
        <input
          value={this.state.input}
          type="text"
          placeholder="Search..."
          onChange={this.onChangeHandler}
        />

        <div id="tvshow-container">
          {filteredTvShows.map(tvshow => (
            <div key={tvshow.id} className="singleShow">
              <Link to={`/tvshows/${tvshow.id}`}>
                <img src={tvshow.image.medium} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
