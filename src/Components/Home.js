import React from "react";

import Filter from "./Filter";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

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
      Total_Results: "",
      selectedGenre: "",
      // genreValue: "",

      Movie: {
        Title: "",
        Genre: "",
        Released: "",
        Rating: "",
        ImgSrc: ""
      },
      yearValue: {
        min: 2000,
        max: 2019
      },
      ratingValue: {
        min: 0,
        max: 10
      },

      GenreList: [],
      MaxYear: 2019,
      MinYear: 2000,
      MaxRate: 10,
      MinRate: 0,
      selectedPage: 1,
      pages: { page1: 1, page2: 2, page3: 3, page4: 4, page5: 5 }
    };

    this.API_KEY = `daf966ec004a4c2e755a29fc1605e0cb`;
    this.page = 1;
  }
  // debugger;

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

  getMovieList = async nextPage => {
    const selectedPage = this.state.selectedPage;
    if (!nextPage) nextPage = selectedPage;
    console.log("a");
    const URL = `https://api.themoviedb.org/3/discover/movie?&page=${nextPage}&api_key=${
      this.API_KEY
    }&with_genres=${this.state.selectedGenre}&sort_by=${this.state.sortBy}`;

    let response = await fetch(URL);
    let data = await response.json();
    let data1 = data.results;
    let data2 = data.total_pages;
    let data3 = data.total_results;
    console.log(URL);
    this.setState({
      MovieList: data1,
      Total_pages: data2,
      Total_Results: data3,
      selectedPage: nextPage
    });
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
  handleSelected = selectedPage => {
    console.log("selected", selectedPage);
    this.setState({ selectedPage: selectedPage });
    this.getMovieList();
  };
  handleNextPage = e => {
    e.preventDefault();
    var currentPage = this.state.selectedPage;
    var nextPage = currentPage + 1;
    this.setState({ currentPage: nextPage });

    this.getMovieList(nextPage);
    //update pagination
    this.updatePagination(currentPage, nextPage);
  };
  handleNextNextPage = e => {
    e.preventDefault();
    const pages = this.state.pages;
    var currentPage = this.state.selectedPage;
    var nextPage = currentPage + 5;
    this.setState({ currentPage: nextPage });

    this.getMovieList(nextPage);
    //update pagination
    this.setState({
      pages: {
        page1: pages.page1 + 5,
        page2: pages.page2 + 5,
        page3: pages.page3 + 5,
        page4: pages.page4 + 5,
        page5: pages.page5 + 5
      }
    });
  };
  handleGoToPage = e => {
    e.preventDefault();
    var previousPage = this.state.selectedPage;
    var nextPage = parseInt(e.target.innerHTML);
    this.getMovieList(nextPage);
    previousPage = previousPage % 5 === 0 ? 5 : previousPage % 5;
    nextPage = nextPage % 5 === 0 ? 5 : nextPage % 5;
    //update pagination
    this.updatePagination(previousPage, nextPage);
  };
  updatePagination(currentPage, nextPage) {
    var ul = document.getElementById("pagination");
    ul.querySelector(
      "li:nth-child(" + (currentPage + 1) + ")"
    ).classList.remove("active");
    ul.querySelector("li:nth-child(" + (nextPage + 1) + ")").classList.add(
      "active"
    );
  }
  handleYearChange = value => {
    this.setState({ yearValue: value });
  };
  handleRateChange = value => {
    this.setState({ ratingValue: value });
  };
  handleSelectFilter = event => {
    if (event.target.value !== null) {
      this.setState({ selectedGenre: event.target.value }, () =>
        this.getMovieList()
      );
    }
    console.log(event.target.value);
  };

  render() {
    const genList = this.state.GenreList.map(item => item.name);
    console.log("gen", genList);

    // const movies = this.state.MovieList;

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
          parseFloat(item.vote_average) <= this.state.MaxRate &&
          parseFloat(item.vote_average) > this.state.MinRate
        );
      });

    console.log(this.state.SearchKeyword);
    return (
      <div className="container text-center" style={{ maxWidth: "1400px" }}>
        <NavBar />

        <div className="row my-3">
          <div className="col-3">
            <Filter
              filterYear={value => this.handleYearChange(value)}
              filterRate={value => this.handleRateChange(value)}
              onYearChanged={value => this.onYearChanged(value.min, value.max)}
              onRatingChanged={value =>
                this.onRatingChanged(value.min, value.max)
              }
              handleSelectedGenre={this.handleSelectFilter}
              valueOfYear={this.state.yearValue}
              valueOfRate={this.state.ratingValue}
              movies={movies}
              genre={this.state.GenreList}
              genName={genList}
              filter={this.filterBySearch}
            />
          </div>
          <div className="col-9">
            <MovieList movies={movies} genre={this.state.GenreList} />
          </div>
          <div className="row my-3 mx-auto">
            <nav aria-label="...">
              <ul id="pagination" class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#" onClick={this.handleGoToPage}>
                    {this.state.pages.page1}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={this.handleGoToPage}>
                    {this.state.pages.page2}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={this.handleGoToPage}>
                    {this.state.pages.page3}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={this.handleGoToPage}>
                    {this.state.pages.page4}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={this.handleGoToPage}>
                    {this.state.pages.page5}
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={this.handleNextPage}>
                    Next
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="#"
                    onClick={this.handleNextNextPage}
                  >
                    Next Next
                  </a>
                </li>
              </ul>
            </nav>
            {/* <Pagination
              total_pages={this.Total_page}
              total_results={this.Total_Results}
              onSelect={this.handleSelected}
              // maxPaginationNumbers={9}
              // activePage={2}
            /> */}
          </div>
        </div>
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
