import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import DisplayContent from "./DisplayContent";
import "./index.css";

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MovieList: [],
      FilteredMovieList: [],
      SearchKeyword: "",

      Movie: {
        Title: "",
        Genre: "",
        Released: "",
        Rating: "",
        ImgSrc: ""
      },

      GenreList: []
    };

    this.API_KEY = `daf966ec004a4c2e755a29fc1605e0cb`;
    this.page = 1;
  }
  debugger;

  goToPage = () => {
    this.page += 1;
    this.getGenreList();
    this.getMovieList();
  };

  getGenreList = async () => {
    let GenURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      this.API_KEY
    }`;
    let response = await fetch(GenURL);
    let data = await response.json();

    data = data.genres;
    this.setState({ GenreList: data });
    //console.log(this.state.GenreList);
  };

  getMovieList = async () => {
    const URL = `https://api.themoviedb.org/3/trending/all/day?&page=${
      this.page
    }&api_key=${this.API_KEY}`;

    let response = await fetch(URL);
    let data = await response.json();
    data = data.results;

    this.setState({ MovieList: data });
    //   Title: data.title,
    //       Genre: "",
    //           Released: data.release_date,
    //               Rating: data.vote_average,
    //                   ImgSrc: data.poster_path
  };

  componentDidMount() {
    this.getGenreList();
    this.getMovieList();
  }

  filterBySearch = e => {
    var updatedList = this.state.MovieList;
    updatedList = updatedList.filter(function(item) {
      const name = item.title || item.original_name || item.original_title;

      if (name) {
        if (name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
          return true;
        }
        // item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 ||
        // item.original_title
        //   .toLowerCase()
        //   .indexOf(e.target.value.toLowerCase()) !== -1 ||
        // item.original_name
        //   .toLowerCase()
        //   .indexOf(e.target.value.toLowerCase()) !== -1
      }
    });
    this.setState({ SearchKeyword: e.target.value });
    this.setState({ FilteredMovieList: updatedList });
  };

  render() {
    const movies =
      this.state.SearchKeyword.length === 0
        ? this.state.MovieList
        : this.state.FilteredMovieList;
    console.log(this.state.SearchKeyword);
    return (
      <div>
        <DisplayContent
          movies={movies}
          genre={this.state.GenreList}
          filter={this.filterBySearch}
        />
        <button onClick={this.goToPage}> Next</button>
      </div>
    );
  }
}

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
