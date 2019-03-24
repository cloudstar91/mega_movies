import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import InputRange from "react-input-range";
import moment from "moment";
import PaginationComponent from "react-reactstrap-pagination";

import "react-input-range/lib/css/index.css";

class Filter extends React.Component {
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
    const genList = this.props.genre.map(item => {
      return <option value={item.name}>{item.name}</option>;
    });

    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Genres
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            {genList}
          </select>
        </div>
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

export default Filter;
