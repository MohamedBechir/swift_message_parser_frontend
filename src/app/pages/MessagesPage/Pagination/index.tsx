import React, { memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
  paginate: any;
}

export const PaginationComponent = memo(({ paginate }: props) => {
  const pageNumbers: number[] = [];
  for (let index = 0; index <= 1; index++) {
    pageNumbers.push(index);
  }
  return (
    <Pagination className="justify-content-center" color="#F49D37">
      {/*  <Pagination.First onClick={() => paginate(1)}>1</Pagination.First>
              <Pagination.Prev onClick={() => paginatePrev()} /> */}
      {pageNumbers.map(number => (
        <Pagination.Item onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
      {/* <Pagination.Next onClick={() => paginateNext()}></Pagination.Next>
        <Pagination.Last onClick={() => paginateLast(pageNumbers.length)}>
          {pageNumbers.length}
        </Pagination.Last> */}
    </Pagination>
  );
});
