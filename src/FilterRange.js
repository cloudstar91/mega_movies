import React from "react";

import "./index.css";

import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class FilterRange extends React.Component {
  constructor(props) {
    super(props);

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
      userValue: "",
      userRatingValue: "",
      usersRuntimeValue: ""
    };
  }
  onInputRange = e => {
    console.log(e.target.value);
    this.setState(
      {
        //   name: e.target.name,
        //   color: e.target.color,
        //   special_ability: e.target.special_ability
        [e.target.value]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

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

// }
//     <FilterRange
//     formatLabel={value => `${value}cm`}
//     value={this.state.value}
//     onChange={value => this.setState({ value })} />

export default FilterRange;
