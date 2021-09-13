/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { MessagesList } from './MessagesList';
import { useDispatch, useSelector } from 'react-redux';
import { selectState } from './MessagesList/slice/selectors';
import { useEffect, useState } from 'react';
import { useFetchMessagesSlice } from './MessagesList/slice';
import { PaginationComponent } from './Pagination';

export function MessagesPage() {
  // Initialize current page and page's size
  const [currentPage, setCurrentPage] = useState(0);
  const [size] = useState(1);

  const { actions } = useFetchMessagesSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.requestFetchMessages({ page: '0', size: '1' }));
  }, [actions, dispatch]);
  const messages = useSelector(selectState);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    dispatch(actions.requestFetchMessages({ page: pageNumber, size: '1' }));
  };

  const paginateLast = () => {
    setCurrentPage(1);
    dispatch(actions.requestFetchMessages({ page: size - 1 + '', size: '1' }));
  };
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    dispatch(
      actions.requestFetchMessages({ page: currentPage + 1 + '', size: '1' }),
    );
  };
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    dispatch(
      actions.requestFetchMessages({ page: currentPage - 1 + '', size: '1' }),
    );
  };

  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <MessagesList messageList={messages.messages} />
      </div>
      <div className="mt-5 justify-content-center">
        <PaginationComponent
          size={size}
          paginate={paginate}
          paginatePrev={paginatePrev}
          paginateNext={paginateNext}
          paginateLast={paginateLast}
        />
      </div>
      <Footer />
    </>
  );
}
