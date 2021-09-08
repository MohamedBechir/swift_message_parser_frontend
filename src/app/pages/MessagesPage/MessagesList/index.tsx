/**
 * Messages Table
 */

import { memo } from 'react';
import { Table } from 'react-bootstrap';

const features = ['Reference', 'SenderBIC', 'ReceiverBIC', 'Type', 'CreatedAt'];

export const MessagesList = memo(() => {
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
