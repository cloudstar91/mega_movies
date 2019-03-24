import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import InputRange from "react-input-range";
import moment from "moment";
import "react-input-range/lib/css/index.css";

class DisplayContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yearValue: {
        min: 2000,
        max: 2019
      },
      ratingValue: {
        min: 0,
        max: 10
      },
      runtimeValue: {
        min: 2000,
        max: 2019
      },
      userYearValue: "",
      userRatingValue: "",
      usersRuntimeValue: ""
    };
  }
  // {min: 2000, max 2005}
  // filterParentUserChange = value => {
  // debugger;
  // this.props.movies.map(item => {
  //   //
  //   let momentObj = moment(item.release_date).format("YYYY-MM-DD");
  //   momentObj = moment().year();
  //   if (momentObj < value.max && momentObj > value.min) {
  //     return item;
  //   }
  // });
  // this.props.movies.filter(this.filterYear);
  // };

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

  handleDropDown(a) {
    a.dropdown();
  }

  render() {
    const genList = this.props.genre.map(item => {
      return <option value={item.name}>{item.name}</option>;
    });

    // var GenreListObj = {};

    // this.props.genre.forEach(item => (GenreListObj[item.id] = item.name));
    // console.log("A", GenreListObj);

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

    // let result = this.props.movies.map(item => {
    //   let movieGenre = [];
    //   let countGenre = {};
    //   movieGenre = this.vlookupGenre(genreList, item.genre_ids);

    //   movieGenre.map(item => {
    //     if (countGenre[item]) {
    //       countGenre[item]++;
    //     } else {
    //       countGenre[item] = 1;
    //     }
    //   });

    // });
    // console.log(result);

    // this.extractGenre(this.props.genre, this.props.movies);
    // let b = a.map(item => {
    //   return <div>{item.title}</div>;
    // });
    return (
      <div className="container" style={{ maxWidth: "1400px" }}>
        <h1> MEGA MOVIES</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="filter"
            onChange={this.props.filter}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              SEARCH
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-3 border">
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
            <div>
              <p>Year</p>
              <InputRange
                draggableTrack
                maxValue={2019}
                minValue={1990}
                onChange={value => this.setState({ yearValue: value })}
                onChangeComplete={value =>
                  this.props.onYearChanged(value.min, value.max)
                }
                value={this.state.yearValue}
              />
              <p>Rate</p>
              <InputRange
                draggableTrack
                maxValue={10}
                minValue={0}
                onChange={value => this.setState({ ratingValue: value })}
                onChangeComplete={value =>
                  this.props.onRatingChanged(value.min, value.max)
                }
                value={this.state.ratingValue}
              />
            </div>
          </div>
          <div className="col-9 border">
            <div class="row">{render}</div>
          </div>
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

// class SideBox extends React.Component {
//   //   handleOnChange = e => {
//   //     this.setState({ yearValue: e.target.value });
//   //   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       yearValue: {
//         min: 2000,
//         max: 2019
//       },
//       ratingValue: {
//         min: 2000,
//         max: 2019
//       },
//       runtimeValue: {
//         min: 2000,
//         max: 2019
//       },
//       userYearValue: "",
//       userRatingValue: "",
//       usersRuntimeValue: ""
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>Year</p>
//         <InputRange
//           draggableTrack
//           maxValue={2019}
//           minValue={1990}
//           onChange={value => this.setState({ yearValue: value })}
//           onChangeComplete={value => console.log(value)}
//           value={this.state.yearValue}
//         />
//         <button>SUBMIT</button>
//       </div>
//     );
//   }
// }

export default DisplayContent;
