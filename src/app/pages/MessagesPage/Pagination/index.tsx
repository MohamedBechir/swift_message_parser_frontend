import React, { memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
  messagesPerPage: number;
  totaleMessages: number;
  paginate: any;
  paginateLast: any;
  paginateNext: any;
  paginatePrev: any;
}

export const PaginationComponent = memo(
  ({
    messagesPerPage,
    totaleMessages,
    paginate,
    paginateLast,
    paginateNext,
    paginatePrev,
  }: props) => {
    const pageNumbers: number[] = [];
    for (
      let index = 1;
      index <= Math.ceil(totaleMessages / messagesPerPage);
      index++
    ) {
      pageNumbers.push(index);
    }
    return (
      <Pagination className="justify-content-center" color="#F49D37">
        <Pagination.First onClick={() => paginate(1)}>1</Pagination.First>
        <Pagination.Prev onClick={() => paginatePrev()} />
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Ellipsis />
        <Pagination.Next onClick={() => paginateNext()}></Pagination.Next>
        <Pagination.Last onClick={() => paginateLast(pageNumbers.length)}>
          {pageNumbers.length}
        </Pagination.Last>
      </Pagination>
    );
  },
);
