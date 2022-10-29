import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ totalPosts, postsPerPage, setCurreentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button
            style={{ margin: '0.3rem' }}
            key={index}
            onClick={() => setCurreentPage(page)}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
