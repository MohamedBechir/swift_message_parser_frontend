/**
 * Messages Details
 */
import { memo } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { Block2 } from '../slice/types';

interface props {
  block2: Block2;
  features: string[];
}

export const Block2Component = memo(({ features, block2 }: props) => {
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
            <CustomeTdOrange>Message Type</CustomeTdOrange>
            <CustomeTd>{'MT' + block2.messageType}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Message Direction</CustomeTdOrange>
            <CustomeTd>{block2.messageDirection}</CustomeTd>
          </tr>
          <tr>
            <CustomeTdOrange>Message Priority</CustomeTdOrange>
            <CustomeTd>{block2.messagePriority}</CustomeTd>
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
