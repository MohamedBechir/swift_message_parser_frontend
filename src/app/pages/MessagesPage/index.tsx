/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { MessagesList } from './MessagesList';
import { useDispatch, useSelector } from 'react-redux';
import { selectState } from './MessagesList/slice/selectors';
import { useState } from 'react';
import { useFetchMessagesSlice } from './MessagesList/slice';
import { PaginationComponent } from './Pagination';

export function MessagesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(1);

  const { actions } = useFetchMessagesSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessages());
  const messages = useSelector(selectState);

  const indexOfLastPage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastPage - messagesPerPage;
  const currentMessages = messages.messages.slice(
    indexOfFirstMessage,
    indexOfLastPage,
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <MessagesList messageList={currentMessages} />
      </div>
      <div className="mt-5 justify-content-center">
        <PaginationComponent
          messagesPerPage={messagesPerPage}
          totaleMessages={messages.messages.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
}
