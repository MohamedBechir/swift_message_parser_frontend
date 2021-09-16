/**
 * Send Message Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from 'react-redux';
import '../sendMessagePage/design.css';
import { useFetchJsonMessages } from './slice';
import { selectState } from './slice/selectors';

export function SendMessagePage() {
  const { actions } = useFetchJsonMessages();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.requestFetchJsonMessages());
  }, [actions, dispatch]);
  const jsonMessages = useSelector(selectState);

  return (
    <>
      <CustomNavbar />
      <h2 className="ml-5" style={{ color: '#f49d37' }}>
        MT101: ID1202
      </h2>
      <div className="row d-flex w-75 ml-5" style={{ height: '300px' }}>
        <div>
          {jsonMessages.jsonMessages.map(jsonMessage => (
            <>
              <ReactJson src={jsonMessage} />
              <Button variant="warning" className="w-25 mt-2 mb-2">
                Send to Queue
              </Button>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
