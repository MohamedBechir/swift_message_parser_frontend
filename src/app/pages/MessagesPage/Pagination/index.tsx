import React, { memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
  messagesPerPage: number;
  totaleMessages: number;
  paginate: any;
}

export const PaginationComponent = memo(
  ({ messagesPerPage, totaleMessages, paginate }: props) => {
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
        <Pagination.Prev />
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Ellipsis />
        <Pagination.Next />
      </Pagination>
    );
  },
);
