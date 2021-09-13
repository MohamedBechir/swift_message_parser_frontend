/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Message } from './message';
import { MessageDetails } from './messageDetails/index';
import { useFetchMessageDetailsSlice } from './messageDetails/slice';
import { selectState } from './messageDetails/slice/selectors';

export function MessagePage() {
  let { id } = useParams<{ id: string }>();
  const titles = [
    'Basic Header Block:',
    'Application Header Block',
    'User Header Block',
    'Text Block',
  ];
  const { actions } = useFetchMessageDetailsSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessageDetails({ id: id }));
  const messageDetailed = useSelector(selectState);
  console.log(messageDetailed);
  return (
    <>
      <div>
        <CustomNavbar />
      </div>
      <div className="row ml-5 mb-5 mr-5">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Preview:</h3>
        <Message id={id} />
      </div>
      <div className=" row ml-5 mb-4">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Details:</h3>
      </div>
      <div className="d-flex justify-content-center"></div>
      <Row className="ml-5 ">
        {titles.map(title => (
          <Col>
            <CustomeH5>{title}</CustomeH5>
            <MessageDetails id={id} />
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}

const CustomeH5 = styled.h5`
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
`;
