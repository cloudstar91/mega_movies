import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import moment from "moment";

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
    let genreList = this.props.genre;

    let render = this.props.movies.map(item => {
      let momentObj = moment(item.release_date).format("YYYY-MM-DD");

      momentObj = moment().year();

      return (
        <ResultDisplay
          genre={this.vlookupGenre(genreList, item.genre_ids)}
          name={item.title || item.original_name || item.original_title}
          release={momentObj}
          poster={item.poster_path}
          rating={item.vote_average}
          id={item.id}
        />
      );
    });

    return (
      <div>
        <div className="row">{render}</div>
      </div>
    );
  }
}

class ResultDisplay extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card-deck" style={{ height: "660px" }}>
          <div className="card mb-3">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + this.props.poster}
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <a href={"movie/" + this.props.id}>
                <h4 className="card-title">{this.props.name}</h4>
              </a>
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
