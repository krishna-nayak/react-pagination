import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationPrevNexComp = ({ totalPosts, postsPerPage, paginatePrev, paginateNext }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <Pagination>
        <Pagination.Prev onClick={() => paginatePrev()} />
        <Pagination.Next onClick={() => paginateNext()} />
      </Pagination>
    </nav>
  );
};

export default PaginationPrevNexComp;
