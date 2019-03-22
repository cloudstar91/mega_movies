import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageCard extends Component {
  render() {
    var a = JSON.stringify(this.props.genre);
    return (
      <div className="col-4">
        <div className="card-deck">
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
            <div className="card-footer">
              <small className="text-muted">{this.props.release}</small>
            </div>
          </div>
        </div>
      </div>

      //   <div>
      //     <p>{this.props.title}</p>
      //     <p>{this.props.release}</p>
      //     <p>{this.props.genre}</p>
      //   </div>
    );
  }
}
export default ImageCard;
