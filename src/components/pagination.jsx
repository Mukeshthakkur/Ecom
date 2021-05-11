import React from "react";
import _ from "lodash";

export default function pagination(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  console.log("pages", currentPage);
  return (
    <nav>
      <ul className="pagination m-5">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} style={{cursor: "pointer"}} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
