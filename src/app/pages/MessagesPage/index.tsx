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
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

export function MessagesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [messageType, setMessageType] = useState('');
  const [pageSize, setPageSize] = useState('2');

  const { actions } = useFetchMessagesSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.requestFetchMessages({ page: currentPage + '', size: pageSize }),
    );
  }, [actions, currentPage, dispatch, pageSize]);
  const messages = useSelector(selectState);
  const size = parseInt(messages.totalPages);
  /**
   *
   * Check this conditions
   */
  const paginate = pageNumber => {
    if (pageNumber === 0) {
      setShowPrev(false);
      setShowNext(true);
      setCurrentPage(pageNumber);
    } else {
      setShowPrev(true);
      setCurrentPage(pageNumber);
      dispatch(
        actions.requestFetchMessages({ page: pageNumber, size: pageSize }),
      );
    }
    if (pageNumber === size - 1) {
      setShowNext(false);
      setCurrentPage(pageNumber);
    }
    if (pageNumber <= size - 1 && pageNumber >= 0) {
      setShowNext(true);
      setCurrentPage(pageNumber);
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
        actions.requestFetchMessages({
          page: currentPage + '',
          size: pageSize,
        }),
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
          size: pageSize,
        }),
      );
    }
  };

  const searchPerMessageType = () => {
    dispatch(
      actions.requestFetchMessagesPerType({
        messageType: messageType,
      }),
    );
  };

  const cancelSearch = () => {
    setMessageType('');
    dispatch(
      actions.requestFetchMessages({ page: currentPage + '', size: pageSize }),
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
          <Col xs={4} className="d-flex">
            <div className="ml-5 mt-1 mr-3"> Items per page: </div>
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="secondary"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu className="w-25">
                <Dropdown.Item onClick={() => setPageSize('3')}>
                  3
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPageSize('5')}>
                  5
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPageSize('8')}>
                  8
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
