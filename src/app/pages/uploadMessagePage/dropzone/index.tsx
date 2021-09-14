import { Button, Row } from 'react-bootstrap';
import '../dropzone/Dropzone.css';
import { FaFileUpload } from 'react-icons/fa';

const Drop = () => {
  return (
    <Row className="drop-container ml-5 d-flex align-items-center">
      <div className="text-center">
        <FaFileUpload size={60} />
      </div>
      <h3 className="text-xl-center">Drag and Drop to Upload File</h3>
      <h3 className="text-xl-center">OR</h3>
      <Button variant="secondary" size="lg" className="w-25">
        Browse File
      </Button>
    </Row>
  );
};
export default Drop;
