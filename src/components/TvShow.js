import React, { Component } from "react";
import axios from "axios";

import "./css/TvShow.css";

class TvShow extends Component {
  state = {
    name: "",
    summary: "",
    language: "",
    premiered: "",
    ratingAverage: "",
    officialSite: "",
    genres: [],
    imageMedium: ""
  };

  async componentDidMount() {
    const res = await axios.get(
      `http://api.tvmaze.com/shows/${this.props.match.params.id}`
    );

    const {
      name,
      summary,
      language,
      premiered,
      rating: { average },
      genres: [...genres],
      image: { medium }
    } = res.data;

    this.setState({
      name: name,
      summary: summary,
      language: language,
      premiered: premiered,
      ratingAverage: average,
      genres: genres,
      imageMedium: medium
    });
  }
  render() {
    let genresStr = "";
    this.state.genres.forEach(genre => {
      genresStr += genre + ", ";
    });
    genresStr = genresStr.slice(0, -2);

    let summary = this.state.summary.slice(3, -5);

    let premiered = this.state.premiered.slice(0, 4);

    return (
      <div id="single-tvshow-container">
        <div className="image-container">
          <img src={this.state.imageMedium} alt="" />
        </div>
        <div className="description">
          <h2>{this.state.name}</h2>
          <span>
            <i className="fas fa-star" />
            {this.state.ratingAverage}/10
          </span>

          <p>Premiered: {premiered}</p>

          <span>{genresStr} </span>

          <p>{summary}</p>
        </div>
      </div>
    );
  }
}

export default TvShow;
