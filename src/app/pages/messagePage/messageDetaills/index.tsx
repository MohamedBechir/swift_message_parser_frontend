/**
 * Messages Details
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

export const MessageDetails = memo(() => {
  const features = ['TAG', 'VALUE'];
  return (
    <>
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
    </>
  );
});

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
