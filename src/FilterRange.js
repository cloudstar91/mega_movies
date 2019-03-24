import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import InputRange from "react-input-range";
import moment from "moment";
import PaginationComponent from "react-reactstrap-pagination";

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
        min: 0,
        max: 10
      },
      runtimeValue: {
        min: 2000,
        max: 2019
      }
    };
  }

  render() {
    return (
      <div>
        <p>Year</p>
        <InputRange
          draggableTrack
          maxValue={2019}
          minValue={1990}
          onChange={value => this.setState({ yearValue: value })}
          onChangeComplete={value =>
            this.props.onYearChanged(value.min, value.max)
          }
          value={this.state.yearValue}
        />
        <p>Rate</p>
        <InputRange
          draggableTrack
          maxValue={10}
          minValue={0}
          onChange={value => this.setState({ ratingValue: value })}
          onChangeComplete={value =>
            this.props.onRatingChanged(value.min, value.max)
          }
          value={this.state.ratingValue}
        />
      </div>
    );
  }
}

export default FilterRange;
