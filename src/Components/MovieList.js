import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import moment from "moment";
import MovieCards from "./MovieCards";
import "react-input-range/lib/css/index.css";

import YouTube from '@u-wave/react-youtube';
import ReactModal from 'react-modal';

class MovieList extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      youtubeKey: '',
    }
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

  handleOpenModal = (id) => {
    this.setState({ showModal: true });
    this.getMovieTrailerKey(id);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  getMovieTrailerKey = (id) => {
    const api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=daf966ec004a4c2e755a29fc1605e0cb&language=en-US`;
    fetch(api)
    .then(response => response.json())
    .then(response => this.setState({
      youtubeKey: response.results[0].key,
    }
    ));
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
              handleOpenModal={this.handleOpenModal}
            />
          );
        })}

        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Inline Styles Modal Example"
          onRequestClose={this.handleCloseModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '0',
              backgroundColor: 'black'
            }
          }}
        >
          <YouTube
            video={this.state.youtubeKey}
            autoplay
            width="100%"
            height="100%"
          />
        </ReactModal>
      </div>
      
    );
  }
}

export default MovieList;
