import React from "react";

import PaginationComponent from "react-reactstrap-pagination";

import "../index.css";

class Pagination extends React.Component {
  render() {
    return (
      <PaginationComponent
        className="page-style"
        totalItems={50}
        pageSize={3}
        onSelect={this.props.onSelect}
        maxPaginationNumbers={15}
        activePage={1}
      />
    );
  }
}
export default Pagination;
