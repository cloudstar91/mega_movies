import React from "react";

import PaginationComponent from "react-reactstrap-pagination";

import "./index.css";

class Pagination extends React.Component {
  render() {
    return (
      <PaginationComponent
        totalItems={50}
        pageSize={3}
        onSelect={this.props.onSelect}
        maxPaginationNumbers={9}
        activePage={2}
      />
    );
  }
}
export default Pagination;
