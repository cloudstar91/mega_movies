import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";
import MovieDetail from "./MovieDetail";
// import "./index.css";
import moment from "moment";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MovieList: [],
      FilteredMovieList: [],
      SearchKeyword: "",
      Total_pages: 1,

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
      selectedPage: 1
    };

    this.API_KEY = `daf966ec004a4c2e755a29fc1605e0cb`;
    this.page = 1;
  }
  debugger;

  handleSelected = selectedPage => {
    console.log("selected", selectedPage);
    this.setState({ selectedPage: selectedPage });
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
      this.state.selectedPage
    }&api_key=${this.API_KEY}`;

    let response = await fetch(URL);
    let data = await response.json();
    let data1 = data.results;
    let data2 = data.total_results;

    this.setState({ MovieList: data1, Total_pages: data2 });
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

  render() {
    const genList = this.state.GenreList.map(item => item.name);
    console.log("gen", genList);
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
      <div className="container" style={{ maxWidth: "1400px" }}>
        <nav className="nav-style navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between  ">
          <h1 className=""> MEGA MOVIES</h1>
          <form className="form-inline my-2 my-lg-0 ">
            <SearchBar filter={this.filterBySearch} />
          </form>
        </nav>

        <div className="row my-3">
          <div className="col-3">
            <Filter
              onYearChanged={this.onYearChanged}
              onRatingChanged={this.onRatingChanged}
              movies={movies}
              genre={this.state.GenreList}
              genName={this.genList}
            />
          </div>
          <div className="col-9">
            <ImageCard movies={movies} genre={this.state.GenreList} />
          </div>

          <Pagination
            // totalItems={50}
            // pageSize={3}
            onSelect={this.handleSelected}
            // maxPaginationNumbers={9}
            // activePage={2}
          />
        </div>
        <MovieDetail />
      </div>
    );
  }
}

export default Home;
// ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
