/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Pagination } from 'react-bootstrap';
import { MessagesList } from './MessagesList';

export function MessagesPage() {
  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <MessagesList />
      </div>
      <div className="mt-5 justify-content-center">
        <Pagination className="justify-content-center" color="#F49D37">
          <Pagination.Prev />
          <Pagination.Item color="#F49D37">{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
      <Footer />
    </>
  );
}
