import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" />
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
    );
  }
}

export default SearchBar;
