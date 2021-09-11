/**
 * Messages Table
 */

import { memo } from 'react';
import { Form } from 'react-bootstrap';

export const Message = memo(() => {
  return (
    <>
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
    </>
  );
});
