import React, { memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
  size: number;
  paginate: any;
  paginatePrev: any;
  paginateNext: any;
  showPrev: boolean;
  showNext: boolean;
}

export const PaginationComponent = memo(
  ({
    size,
    paginate,
    paginatePrev,
    paginateNext,
    showPrev,
    showNext,
  }: props) => {
    const pageNumbers: number[] = [];
    for (let index = 0; index <= size - 1; index++) {
      pageNumbers.push(index);
    }
    return (
      <Pagination className="justify-content-center" color="#F49D37">
        <Pagination.Prev onClick={() => paginatePrev()} disabled={!showPrev} />
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => paginateNext()}
          disabled={!showNext}
        ></Pagination.Next>
      </Pagination>
    );
  },
);
