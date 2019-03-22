import React from "react";

import "./index.css";

import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class SideBox extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleOnChange.bind(this);
    this.state = {
      yearValue: {
        min: 2000,
        max: 2019
      },
      ratingValue: {
        min: 2000,
        max: 2019
      },
      runtimeValue: {
        min: 2000,
        max: 2019
      },
      userYearValue: "",
      userRatingValue: "",
      usersRuntimeValue: ""
    };
  }

  //   handleOnChange = e => {
  //     this.setState({ yearValue: e.target.value });
  //   };

  render() {
    return (
      <div>
        <p>Year</p>
        <InputRange
          draggableTrack
          maxValue={2019}
          minValue={1990}
          onChange={value => this.setState({ yearValue: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.yearValue}
        />
        <button>SUBMIT</button>
      </div>
    );
  }
}

export default SideBox;
