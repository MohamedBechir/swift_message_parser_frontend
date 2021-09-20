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
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

export function MessagesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [messageType, setMessageType] = useState('');

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
        actions.requestFetchMessages({
          page: currentPage + '',
          size: '2',
        }),
      );
    }
  };

  const searchPerMessageType = () => {
    console.log(currentPage);
    dispatch(
      actions.requestFetchMessagesPerType({
        messageType: messageType,
      }),
    );
  };

  const cancelSearch = () => {
    setMessageType('');
    dispatch(
      actions.requestFetchMessages({ page: currentPage + '', size: '2' }),
    );
  };

  const messageTypeChange = event => {
    setMessageType(event.target.value);
  };

  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="row mt-5  d-flex justify-content-center">
        <Row>
          <Col xs={4}></Col>
          <Col xs={4} className="d-flex">
            <Form.Control
              className="ml-2"
              placeholder="Search"
              name="messageType"
              value={messageType}
              onChange={messageTypeChange}
            />
            <Button className="btn-danger" size="sm" onClick={cancelSearch}>
              <GiCancel />
            </Button>
            <Button
              className="btn-secondary"
              size="sm"
              onClick={searchPerMessageType}
            >
              <AiOutlineSearch />
            </Button>
          </Col>
          <Col xs={4}>
            <div className="dropdown">
              <Button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Items Per Page
              </Button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Button className="dropdown-item" type="button">
                  3
                </Button>
                <Button className="dropdown-item" type="button">
                  5
                </Button>
                <Button className="dropdown-item" type="button">
                  10
                </Button>
              </div>
            </div>
          </Col>
        </Row>
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
