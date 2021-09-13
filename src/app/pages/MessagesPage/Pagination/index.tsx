import React, { memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
  size: number;
  paginate: any;
  paginatePrev: any;
  paginateNext: any;
  paginateLast: any;
}

export const PaginationComponent = memo(
  ({ size, paginate, paginatePrev, paginateNext, paginateLast }: props) => {
    const pageNumbers: number[] = [];
    for (let index = 0; index <= size; index++) {
      pageNumbers.push(index);
    }
    return (
      <Pagination className="justify-content-center" color="#F49D37">
        <Pagination.First onClick={() => paginate(1)}>1</Pagination.First>
        <Pagination.Prev onClick={() => paginatePrev()} />
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => paginateNext()}></Pagination.Next>
        <Pagination.Last onClick={() => paginateLast(size)}>
          {pageNumbers.length}
        </Pagination.Last>
      </Pagination>
    );
  },
);
