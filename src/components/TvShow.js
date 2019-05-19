import React, { Component } from "react";
import axios from "axios";

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
      <div
        className="container"
        style={{
          display: "flex",
          padding: "1rem",
          backgroundColor: "#1C2A39",
          color: "white",
          height: "100vh"
        }}
      >
        <div className="image-container">
          <img src={this.state.imageMedium} alt="" />
        </div>
        <div className="description" style={{ paddingLeft: "1rem" }}>
          <h2>{this.state.name}</h2>
          <span>
            <i
              className="fas fa-star"
              style={{ color: "gold", marginRight: "5px" }}
            />
            {this.state.ratingAverage}/10{" "}
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
