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
                <p className="card-text">{this.props.genre}</p>

                <div className="card-footer d-flex justify-content-between">
                  <small className="text-muted">{this.props.release}</small>
                  <small className="text-muted">{this.props.rating}</small>
                </div>
                {/* button to trigger Modal */}
                <button
                  onClick={() => this.props.handleOpenModal(this.props.id)}
                >
                  Trigger Modal
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
