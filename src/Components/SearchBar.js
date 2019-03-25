import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0 ">
          <input
            type="text"
            className="form-control mr-sm-2 search-style"
            placeholder="Search"
            name="filter"
            onChange={this.props.searchBox}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
