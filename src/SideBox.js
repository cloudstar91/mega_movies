import React from "react";

import "./index.css";

import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";
import InputRange from "react-input-range";
import FilterRange from "./FilterRange";

class SideBox extends React.Component {
  render() {
    return (
      <FilterRange />
      //   <div>
      //     <div className="row">
      //       <div className="dropdown">
      //         <button
      //           className="btn btn-secondary dropdown-toggle"
      //           type="button"
      //           id="dropdownMenuButton"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown button
      //         </button>
      //         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      //           <div className="dropdown-item">Action</div>
      //           <div className="dropdown-item">Action</div>
      //           <div className="dropdown-item">Action</div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <label for="customRange1">Year</label>
      //       <input type="range" class="custom-range" id="customRange1" />
      //     </div>

      //     <div className="row">
      //       <label for="customRange1">Rating</label>
      //       <input type="range" class="custom-range" id="customRange1" />
      //     </div>
      //     <div className="row">
      //       <label for="customRange1">Runtime</label>
      //       <input type="range" class="custom-range" id="customRange1" />
      //     </div>
      //   </div>
    );
  }
}

export default SideBox;
