import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import moment from "moment";
import MovieCards from "./MovieCards";
import "react-input-range/lib/css/index.css";

import YouTube from "@u-wave/react-youtube";
import ReactModal from "react-modal";

class TrailerModal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="Inline Styles Modal Example"
        onRequestClose={this.props.handleCloseModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "3px",
            outline: "none",
            padding: "0",
            backgroundColor: "black"
          }
        }}
      >
        <YouTube
          video={this.props.youtubeKey}
          autoplay
          width="100%"
          height="100%"
        />
      </ReactModal>
    );
  }
}

export default TrailerModal;
