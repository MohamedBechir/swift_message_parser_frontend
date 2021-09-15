import React, { useState } from 'react';
import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Form } from 'react-bootstrap';
import { MyDropzone } from './DropArea';

export function UploadMessageComponenet() {
  const [filenName, setFileName] = useState('');

  return (
    <>
      <div>
        <CustomNavbar />
      </div>
      <div className="row ml-5 mb-5 mr-5">
        <h3 className="row" style={{ color: '#F49D37' }}>
          Upload SWIFT Message:
        </h3>
        <h4 className="row" style={{ color: '#000000', fontWeight: 'lighter' }}>
          File Name:
        </h4>
        <Form.Group
          className="w-25 mt-2 row"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control placeholder={filenName} className="mr-5" readOnly />
        </Form.Group>
      </div>
      <MyDropzone passFileName={setFileName} />
      <Footer />
    </>
  );
}
