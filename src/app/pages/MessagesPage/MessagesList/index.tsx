/**
 * Messages Table
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFetchMessagesSlice } from './slice';
import { selectState } from './slice/selectors';

const features = ['Reference', 'SenderBIC', 'ReceiverBIC', 'Type', 'CreatedAt'];

export const MessagesList = memo(() => {
  const { actions } = useFetchMessagesSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessages());
  const messages = useSelector(selectState);

  return (
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
        {messages.messages.map(message => (
          <tr>
            <td style={{ textAlign: 'center' }}>
              <Link
                style={{ color: '#F49D37', fontWeight: 'bold' }}
                to={`/messages/${message.id}`}
              >
                {message.id}
              </Link>
            </td>
            <CustomeTd>{message.senderBIC}</CustomeTd>
            <CustomeTd>{message.receiverBIC}</CustomeTd>
            <CustomeTd>{message.messageType}</CustomeTd>
            <CustomeTd>
              {new Date(message.createdAt).toLocaleDateString()}
            </CustomeTd>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

const CustomeTd = styled.td`
  text-align: center;
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
