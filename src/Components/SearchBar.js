import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control mr-sm-2 search-style"
          placeholder="Search"
          name="filter"
          onChange={this.props.filter}
        />
      </div>

      // <input className="form-control mr-sm-2"
      //     type="text"
      //     placeholder="Search"

      //     name="filter"
      //     onChange={this.props.filter}
      // />
      // <button className="btn btn-outline-success my-2 my-sm-0 btn-style" type="button">
      //     Search
      // </button>
    );
  }
}

export default SearchBar;
