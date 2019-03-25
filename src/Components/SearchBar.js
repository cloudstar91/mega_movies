import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-style navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between mt-2 mb-5 ">
          <h1 className=""> MEGA MOVIES</h1>
          <form className="form-inline my-2 my-lg-0 ">
            <input
              type="text"
              className="form-control mr-sm-2 search-style"
              placeholder="Search"
              name="filter"
              onChange={this.props.filter}
            />
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
