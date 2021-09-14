/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Message } from './message';
import { MessageDetails } from './messageDetails/index';

export function MessagePage() {
  let { id } = useParams<{ id: string }>();
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
          <MessageDetails id={id} />
      </Row>
      <Footer />
    </>
  );
}
