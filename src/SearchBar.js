import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import "react-input-range/lib/css/index.css";

class SearchBar extends React.Component {
  render() {
    return (
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
    );
  }
}

export default SearchBar;
