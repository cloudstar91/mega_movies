import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageCard extends Component {
  render() {
    var a = JSON.stringify(this.props.genre);
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.release}</p>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}
export default ImageCard;
