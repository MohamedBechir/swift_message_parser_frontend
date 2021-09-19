/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { MessagesList } from './MessagesList';
import { useDispatch, useSelector } from 'react-redux';
import { selectState } from './MessagesList/slice/selectors';
import React, { useEffect, useState } from 'react';
import { useFetchMessagesSlice } from './MessagesList/slice';
import { PaginationComponent } from './Pagination';

export function MessagesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const { actions } = useFetchMessagesSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.requestFetchMessages({ page: currentPage + '', size: '2' }),
    );
  }, [actions, currentPage, dispatch]);
  const messages = useSelector(selectState);
  const size = parseInt(messages.totalPages);

  const paginate = pageNumber => {
    if (pageNumber === 0) {
      setShowPrev(false);
    } else if (pageNumber === size - 1) {
      setShowNext(false);
    } else {
      setShowPrev(true);
      setCurrentPage(pageNumber);
      dispatch(actions.requestFetchMessages({ page: pageNumber, size: '2' }));
    }
  };

  const paginateNext = () => {
    setShowPrev(true);
    if (currentPage === size - 1) {
      setShowNext(false);
    } else {
      setShowNext(true);
      setCurrentPage(currentPage + 1);
      dispatch(
        actions.requestFetchMessages({ page: currentPage + '', size: '2' }),
      );
    }
  };

  const paginatePrev = () => {
    setShowNext(true);
    if (currentPage === 0) {
      setShowPrev(false);
    } else {
      setShowPrev(true);
      setCurrentPage(currentPage - 1);
      dispatch(
        actions.requestFetchMessages({ page: currentPage + '', size: '2' }),
      );
    }
  };

  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <MessagesList messageList={messages.messageGeneralInfoModels} />
      </div>
      <div className="mt-5 justify-content-center">
        <PaginationComponent
          size={size}
          paginate={paginate}
          paginatePrev={paginatePrev}
          paginateNext={paginateNext}
          showPrev={showPrev}
          showNext={showNext}
        />
      </div>
      <Footer />
    </>
  );
}
