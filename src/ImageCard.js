import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import InputRange from "react-input-range";
import moment from "moment";
import PaginationComponent from "react-reactstrap-pagination";

import "react-input-range/lib/css/index.css";

class DisplayContent extends React.Component {
  vlookupGenre = (genreList, ids) => {
    var genres = [];
    for (var i = 0; i < ids.length; i++) {
      for (var j = 0; j < genreList.length; j++) {
        if (ids[i] === genreList[j].id) {
          genres.push(genreList[j].name);
          break;
        }
      }
    }

    return genres.join("-");
  };

  render() {
    const genList = this.props.genre.map(item => {
      return <option value={item.name}>{item.name}</option>;
    });

    let genreList = this.props.genre;

    let render = this.props.movies.map(item => {
      let momentObj = moment(item.release_date).format("YYYY-MM-DD");

      momentObj = moment().year();

      return (
        <ResultDisplay
          genre={this.vlookupGenre(genreList, item.genre_ids)}
          title={item.title}
          release={momentObj}
          poster={item.poster_path}
          rating={item.vote_average}
        />
      );
    });

    return (
      <div>
        <div className="row" />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Genres
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            {genList}
          </select>
        </div>

        <div className="col-12 border">
          <div className="row">{render}</div>
        </div>
      </div>
    );
  }
}

class ResultDisplay extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card-deck" style={{ height: "660px" }}>
          <div className="card">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + this.props.poster}
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.genre}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <small className="text-muted">{this.props.release}</small>
              <small className="text-muted">{this.props.rating}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayContent;
