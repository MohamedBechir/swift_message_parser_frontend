/**
 * Messages Details
 */
import { memo } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { Block1 } from '../slice/types';

interface props {
  block1: Block1;
  features: string[];
}

export const Block1Component = memo(({ features, block1 }: props) => {
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
            <CustomeTdOrange>Application ID</CustomeTdOrange>
            <CustomeTd>{block1.applicationId}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Service ID</CustomeTdOrange>
            <CustomeTd>{block1.serviceId}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Logical Terminal</CustomeTdOrange>
            <CustomeTd>{block1.logicalTerminal}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Sequence Number</CustomeTdOrange>
            <CustomeTd>{block1.sequenceNumber}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Session Number</CustomeTdOrange>
            <CustomeTd>{block1.sessionNumber}</CustomeTd>
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

/* const CustomeH5 = styled.h5`
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
`; */
