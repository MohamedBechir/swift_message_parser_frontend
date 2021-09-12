/**
 * Messages Details
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useFetchMessageDetailsSlice } from './slice';
import { selectState } from './slice/selectors';

interface props {
  id: string;
}

export const MessageDetails = memo(({ id }: props) => {
  const features = ['TAG', 'VALUE'];
  const { actions } = useFetchMessageDetailsSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessageDetails({ id: id }));
  const messageDetailed = useSelector(selectState);
  console.log(messageDetailed);
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
