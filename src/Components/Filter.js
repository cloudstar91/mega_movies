import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

class Filter extends React.Component {
  render() {
    const genList = this.props.genre.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });

    return (
      <div>
        <div className="input-group mb-5">
          <div className="input-group-prepend">
            <label className="input-group-text">Genres</label>
          </div>
          <select
            onChange={this.props.handleSelectedGenre}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value="">Choose...</option>
            {genList}
          </select>
        </div>
        <h5>Year</h5>
        <InputRange
          draggableTrack
          maxValue={2019}
          minValue={1990}
          onChange={this.props.filterYear}
          onChangeComplete={this.props.onYearChanged}
          value={this.props.valueOfYear}
        />
        <h5>Rate</h5>
        <InputRange
          draggableTrack
          maxValue={10}
          minValue={0}
          onChange={this.props.filterRate}
          onChangeComplete={this.props.onRatingChanged}
          value={this.props.valueOfRate}
        />
      </div>
    );
  }
}

export default Filter;
