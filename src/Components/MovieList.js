import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import moment from "moment";
import MovieCards from "./MovieCards";
import "react-input-range/lib/css/index.css";

import YouTube from "@u-wave/react-youtube";
import ReactModal from "react-modal";
import TrailerModal from "./TrailerModal";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      youtubeKey: ""
    };
  }

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

  handleOpenModal = id => {
    this.setState({ showModal: true });
    this.getMovieTrailerKey(id);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  getMovieTrailerKey = id => {
    const api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=daf966ec004a4c2e755a29fc1605e0cb&language=en-US`;
    fetch(api)
      .then(response => response.json())
      .then(response =>
        this.setState({
          youtubeKey: response.results[0].key
        })
      );
  };

  render() {
    let genreList = this.props.genre;
    // let movies = this.props.movies;
    debugger;
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
              overview={item.overview.slice(0, 200) + "..."}
              id={item.id}
              handleOpenModal={this.handleOpenModal}
            />
          );
        })}

        <TrailerModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          youtubeKey={this.state.youtubeKey}
        />
      </div>
    );
  }
}

export default MovieList;
