import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Form } from 'react-bootstrap';
import Drop from './dropzone/index';

export const uploadMessageComponenet = () => {
  return (
    <>
      <div>
        <CustomNavbar />
      </div>
      <div className="row ml-5 mb-5 mr-5">
        <h3 className="row" style={{ color: '#F49D37' }}>
          Upload SWIFT Message:
        </h3>
        <h4 className="row" style={{ color: '#000000', fontWeight: 'bold' }}>
          Title:
        </h4>
        <Form.Group
          className="w-25 mt-2 row"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control placeholder="MT103.txt" className="mr-5" readOnly />
        </Form.Group>
      </div>
      <Drop />
      <h5 className="row ml-5 mt-3" style={{ fontWeight: 'lighter' }}>
        Accepted format: .txt*
      </h5>
      <Footer />
    </>
  );
};
