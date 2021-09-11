/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Message } from './message';
import { MessageDetails } from './message/slice';

export function MessagePage() {
  return (
    <>
      <div>
        <CustomNavbar />
      </div>
      <div className="row ml-5 mb-5 mr-5">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Preview:</h3>
        <Message />
      </div>
      <div className=" row ml-5 mb-4">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Details:</h3>
      </div>
      <div className="d-flex justify-content-center"></div>
      <Row className="ml-5 ">
        <Col>
          <CustomeH5>Basic Header Block:</CustomeH5>
          <MessageDetails />
        </Col>
        <Col>
          <CustomeH5>Application Header Block:</CustomeH5>
          <MessageDetails />
        </Col>
        <Col>
          <CustomeH5>User Header Block:</CustomeH5>
          <MessageDetails />
        </Col>
        <Col>
          <CustomeH5>Text Block:</CustomeH5>
          <MessageDetails />
        </Col>
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
