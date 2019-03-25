import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-style navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded mt-2 mb-5 ">
          <h1 className=""> MEGA MOVIES</h1>
        </nav>
      </div>
    );
  }
}

export default NavBar;
