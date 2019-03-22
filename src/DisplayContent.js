import React from "react";

import "./index.css";

import SearchBar from "./SearchBar";
import SideBox from "./SideBox";
import ImageCard from "./ImageCard";

class DisplayContent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  // genreList 19 [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
  // ids [28, 12, 878]
  extractGenre = (genreList, ids) => {
    debugger;
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
    debugger;
    console.log(genres);
    return genres;
  };

  render() {
    let genreList = this.props.genre;
    let render = this.props.movies.map(item => (
      <ImageCard
        genre={this.extractGenre(genreList, item.genre_ids)}
        title={item.title}
        release={item.release_date}
        poster={item.poster_path}
      />
    ));
    // this.extractGenre(this.props.genre, this.props.movies);
    // let b = a.map(item => {
    //   return <div>{item.title}</div>;
    // });
    return (
      <div className="container">
        <h1> MEGA MOVIES</h1>
        <SearchBar />
        <div className="row">
          <div className="col-4 border">
            <SideBox />
          </div>
          <div className="col-8 border">
            <div class="row">{render}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayContent;
