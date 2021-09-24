/**
 *
 * Custome Navbar
 *
 */

import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import * as IconNameFa from 'react-icons/fa';
import * as IconNameBs from 'react-icons/bs';
import * as IconNameBi from 'react-icons/bi';
import * as IconNameRi from 'react-icons/ri';
import * as IconNameIm from 'react-icons/im';

export const CustomNavbar = () => {
  return (
    <div>
      <Row className="bg-dark mb-5">
        <Navbar style={{ backgroundColor: '#000000' }}>
          <Nav className="min-vw-100">
            <Col className=" col-sm d-flex flex-row">
              <Col>
                <Nav.Link href="/" className="text-white font-weight-bold">
                  SMP
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link className="text-white" href="/statistics">
                  <IconNameFa.FaChartBar className="mr-2" />
                  Dashboard
                </Nav.Link>
              </Col>
            </Col>
            <Col className="d-flex col-sm">
              <Col className="d-flex justify-content-center mr-5">
                <Nav.Link className="text-white" href="/messages">
                  <IconNameBs.BsSearch className="mr-2" />
                  Swift Messages
                </Nav.Link>
              </Col>
            </Col>
            <Col className="d-flex flex-row col-sm">
              <Col>
                <Nav.Link className="text-white" href="/send-message">
                  <IconNameBi.BiMessageRounded className="mr-2" />
                  Send Messages
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link className="text-white" href="/upload-file">
                  <IconNameIm.ImFilesEmpty className="mr-2" />
                  Upload Message
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link className="text-white" href="/home">
                  <IconNameRi.RiInformationLine className="mr-2" />
                  About Us
                </Nav.Link>
              </Col>
            </Col>
          </Nav>
        </Navbar>
      </Row>
      <Row className="bg-light"></Row>
    </div>
  );
};
