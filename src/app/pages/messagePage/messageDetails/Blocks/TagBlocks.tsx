/**
 * Messages Details
 */
import { memo } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { Field, TagBlock } from '../slice/types';

interface props {
  fields: Field[];
  features: string[];
}

export const TagBlocksComponent = memo(({ features, fields }: props) => {
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
          {fields.map(field => (
            <tr>
              <CustomeTdOrange>{field.tagName}</CustomeTdOrange>
              <CustomeTd>{field.tagValue}</CustomeTd>
            </tr>
          ))}
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
