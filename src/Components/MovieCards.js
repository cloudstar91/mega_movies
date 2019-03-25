import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class MovieCards extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card-deck">
          <div className="card mb-3">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + this.props.poster}
              className="card-img-top"
              alt="poster"
            />
            <div className="position-relative">
              <div className="card-body-position">
                <a href={"/movie/" + this.props.id}>
                  <h4 className="card-title text-decoration-none">
                    {this.props.name}
                  </h4>
                </a>
                <p className="card-text">{this.props.overview}</p>

                <div className="card-footer d-flex justify-content-between">
                  <div>
                    <p className="font-weight-bolder"> Year</p>
                    <p className="text-white">{this.props.release}</p>
                  </div>
                  <div>
                    <p className="font-weight-bolder"> Rate</p>
                    <p className="text-white">{this.props.rating}</p>
                  </div>
                </div>

                <button
                  className="btn-style shadow-lg p-3 mb-5 bg-white rounded font-weight-bold"
                  onClick={() => this.props.handleOpenModal(this.props.id)}
                >
                  TRAILER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCards;
