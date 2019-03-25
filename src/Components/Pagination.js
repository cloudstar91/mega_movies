import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import "react-input-range/lib/css/index.css";

import "../index.css";

class Pagination extends React.Component {
  render() {
    return (
      <div>
        <ul className="pagination justify-content-center page-style">
          <li>
            <button className="page-link">Previous</button>
          </li>
          <li>
            <button className="page-link">1</button>
          </li>
          <li>
            <button className="page-link">2</button>
          </li>
          <li>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </div>
      //   <PaginationComponent
      //     className="page-style"
      //     totalItems={50}
      //     pageSize={3}
      //     onSelect={this.props.onSelect}
      //     maxPaginationNumbers={15}
      //     activePage={1}
      //   />
    );
  }
}
export default Pagination;
