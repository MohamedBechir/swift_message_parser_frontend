/**
 * Messages Table
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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
            color: '#FFFFF',
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
            <td>{message.id}</td>
            <td>{message.senderBIC}</td>
            <td>{message.receiverBIC}</td>
            <td>{message.messageType}</td>
            <td>{new Date(message.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});
