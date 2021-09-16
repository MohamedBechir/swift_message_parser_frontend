/**
 * Send Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { Button } from 'react-bootstrap';

export function SendMessagePage() {
  return (
    <>
      <CustomNavbar />
      <div className="container align-items-center mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>Choose the Type of Message That you will send:</h1>
          <Button
            href="/send-message/json"
            size="lg"
            className="btn btn-primary mt-5 mr-5"
          >
            Send JSON Message
          </Button>
          <Button
            href="/send-message/xml"
            size="lg"
            className="btn btn-warning mt-5"
          >
            Send XML Message
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
