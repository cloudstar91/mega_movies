import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import moment from "moment";
import MovieCards from "./MovieCards";
import "react-input-range/lib/css/index.css";

class MovieList extends React.Component {
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
    return (
      <div className="row">
        {this.props.movies.map(item => {
          let momentObj = moment(item.release_date).format("YYYY-MM-DD");
          momentObj = moment().year();
          return (
            <MovieCards
              genre={this.vlookupGenre(genreList, item.genre_ids)}
              name={item.title || item.original_name || item.original_title}
              release={momentObj}
              poster={item.poster_path}
              rating={item.vote_average}
              id={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
