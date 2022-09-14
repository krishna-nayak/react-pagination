import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ totalPosts, postsPerPage, paginate, active }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    paginate(number);
  };

  return (
    <nav>
      <Pagination>
        {pageNumbers.map((number, index) => (
          <Pagination.Item onClick={() => handleClick(number)} key={index} active={number === active}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default PaginationComponent;
