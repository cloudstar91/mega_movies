import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import DisplayContent from "./DisplayContent";
import "./index.css";
import moment from "moment";
import Pagination from "react-js-pagination";

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

      GenreList: [],
      MaxYear: 2019,
      MinYear: 2000,
      MaxRate: 10,
      MinRate: 0,
      ActivePage: 10
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
    this.setState({ SearchKeyword: e.target.value });
  };
  onYearChanged = (min, max) => {
    this.setState({ MaxYear: max, MixYear: min });
  };
  onRatingChanged = (min, max) => {
    this.setState({ MaxRate: max, MinRate: min });
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    const movies = this.state.MovieList.filter(item => {
      const name = item.title || item.original_name || item.original_title;
      return (
        name &&
        name.toLowerCase().indexOf(this.state.SearchKeyword.toLowerCase()) !==
          -1
      );
    })
      .filter(item => {
        // debugger;

        return (
          parseInt(moment(item.release_date).format("YYYY")) <=
            parseInt(this.state.MaxYear) &&
          parseInt(moment(item.release_date).format("YYYY")) >
            parseInt(this.state.MinYear)
        );
      })
      .filter(item => {
        return (
          parseInt(item.vote_average) <= this.state.MaxRate &&
          parseInt(item.vote_average) > this.state.MinRate
        );
      });

    console.log(this.state.SearchKeyword);
    return (
      <div>
        <DisplayContent
          onYearChanged={this.onYearChanged}
          onRatingChanged={this.onRatingChanged}
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
