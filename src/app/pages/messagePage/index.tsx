/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Col, Form, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';

export function MessagePage() {
  const features = ['TAG', 'VALUE'];

  return (
    <>
      <div>
        <CustomNavbar />
      </div>
      <div className="row ml-5 mb-5 mr-5">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Preview:</h3>
        <Form.Group
          className=" mt-3 mr-5"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            placeholder="{1:F01TESTAR00AXXX7607663781}{2:O1010824170510TESTAR00AXXX94149133901705101425N}{4::20:DG942_171206-004:28D:00001/00001:50H:/344110001637 TESTAR00AXXX Utrecht Netherlands :30:170502 :21:010735904 :32B:CNY14,00 :57A:CIBKCNBJ473 :59:/344110000361 CASH CUSTOMER I TESTAR00AXXX Utrecht Netherlands :70:/RFB/C767405OCP021001 :71A:SHA -} {5:{CHK:B3BF0D846AFD}}"
            className="mr-5"
            readOnly
          />
        </Form.Group>
      </div>
      <div className=" row ml-5 mb-4">
        <h3 style={{ color: '#F49D37' }}>SWIFT Message Details:</h3>
      </div>
      <div className="d-flex justify-content-center"></div>
      <Row className="ml-5 ">
        <Col>
          <CustomeH5>Basic Header Block:</CustomeH5>
          <Table className="w-75 mt-5" striped bordered hover>
            <thead>
              <tr
                style={{
                  backgroundColor: '#000000',
                  color: '#E5E5E5',
                  fontFamily: 'Arial',
                  textAlign: 'center',
                }}
              >
                {features.map(feature => (
                  <th>{feature}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <CustomeH5>Application Header Block:</CustomeH5>
          <Table className="w-75 mt-5" striped bordered hover>
            <thead>
              <tr
                style={{
                  backgroundColor: '#000000',
                  color: '#E5E5E5',
                  fontFamily: 'Arial',
                  textAlign: 'center',
                }}
              >
                {features.map(feature => (
                  <th>{feature}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <CustomeH5>User Header Block:</CustomeH5>
          <Table className="w-75 mt-5" striped bordered hover>
            <thead>
              <tr
                style={{
                  backgroundColor: '#000000',
                  color: '#E5E5E5',
                  fontFamily: 'Arial',
                  textAlign: 'center',
                }}
              >
                {features.map(feature => (
                  <th>{feature}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <CustomeH5>Text Block:</CustomeH5>
          <Table className=" w-75 mt-5" striped bordered hover>
            <thead>
              <tr
                style={{
                  backgroundColor: '#000000',
                  color: '#E5E5E5',
                  fontFamily: 'Arial',
                  textAlign: 'center',
                }}
              >
                {features.map(feature => (
                  <th>{feature}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
              <tr>
                <CustomeTdOrange>Sender BIC</CustomeTdOrange>
                <CustomeTd>TESTAR00AXX</CustomeTd>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

const CustomeTd = styled.td`
  text-align: center;
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const CustomeTdOrange = styled.td`
  text-align: center;
  color: #f49d37;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const CustomeH5 = styled.h5`
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
`;
