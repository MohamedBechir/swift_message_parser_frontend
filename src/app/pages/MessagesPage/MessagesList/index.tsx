/**
 * Messages Table
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';

const features = ['Reference', 'SenderBIC', 'ReceiverBIC', 'Type', 'CreatedAt'];

export const MessagesList = memo(() => {
  return (
    <Table className="w-75 " striped bordered hover>
      <thead>
        <tr
          style={{
            backgroundColor: '#707070',
            color: '#E5E5E5',
            fontFamily: 'Lato',
          }}
        >
          {features.map(feature => (
            <th>{feature}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
});
