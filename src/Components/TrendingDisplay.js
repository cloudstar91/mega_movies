import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class TrendingDisplay extends React.Component {
  render() {
    console.log(this.props.movies[0]);
    debugger;
    // console.log(this.props.movies[0].poster_path);

    return (
      <div className="row">
        {this.props.movies.length > 0 && (
          <div class="container-fluid ">
            <img
              className="card-img"
              src={
                "http://image.tmdb.org/t/p/original/" +
                this.props.movies[0].backdrop_path
              }
              alt="Card"
            />
            <div class="text-center imgoverlay">
              <h2 class="font-weight-bold" style={{ "font-family": "fantasy" }}>
                {this.props.movies[0].original_title}
              </h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TrendingDisplay;
// <div class="card-img-overlay">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">
//         This is a wider card with supporting text below as a natural
//         lead-in to additional content. This content is a little bit
//         longer.
//               </p>
//     <p class="card-text">Last updated 3 mins ago</p>
// </div>
