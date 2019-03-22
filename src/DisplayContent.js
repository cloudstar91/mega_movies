import React from "react";

import "./index.css";

import SearchBar from "./SearchBar";
import SideBox from "./SideBox";
import ImageCard from "./ImageCard";
import moment from "moment";

class DisplayContent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  vlookupGenre = (genreList, ids) => {
    // let genre_names = genreList.map(item => {
    //   debugger;
    //   ids.map(id => {
    //     debugger;
    //     if (id === item.id) return item.name;
    //   });
    // });

    var genres = [];
    for (var i = 0; i < ids.length; i++) {
      for (var j = 0; j < genreList.length; j++) {
        if (ids[i] === genreList[j].id) {
          genres.push(genreList[j].name);
          break;
        }
      }
    }

    return genres;
  };

  render() {
    // var GenreListObj = {};

    // this.props.genre.forEach(item => (GenreListObj[item.id] = item.name));
    // console.log("A", GenreListObj);

    let genreList = this.props.genre;

    let render = this.props.movies.map(item => {
      let momentObj = moment(item.release_date).format("YYYY-MM-DD");

      momentObj = moment().year();

      return (
        <ImageCard
          genre={this.vlookupGenre(genreList, item.genre_ids)}
          title={item.title}
          release={momentObj}
          poster={item.poster_path}
          rating={item.vote_average}
        />
      );
    });
    // this.extractGenre(this.props.genre, this.props.movies);
    // let b = a.map(item => {
    //   return <div>{item.title}</div>;
    // });
    return (
      <div className="container" style={{ maxWidth: "1400px" }}>
        <h1> MEGA MOVIES</h1>
        <SearchBar />
        <div className="row">
          <div className="col-3 border">
            <SideBox />
          </div>
          <div className="col-9 border">
            <div class="row">{render}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayContent;
