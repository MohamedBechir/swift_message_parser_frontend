/**
 * Send JSON Message Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchJsonMessages } from './slice';
import { selectState } from './slice/selectors';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import '../sendJsonMessage/design.css';

export function SendJsonMessagePage() {
  const { actions } = useFetchJsonMessages();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.requestFetchJsonMessages());
  }, [actions, dispatch]);
  const jsonMessages = useSelector(selectState);
  const sendMessage = id => {
    dispatch(actions.requestSendMessage({ id: id }));
  };

  return (
    <>
      <CustomNavbar />
      <div className="row mr-5 ml-5">
        <h3>JSON Files To Send:</h3>
        <div>
          {jsonMessages.jsonMessages.map(jsonMessage => (
            <>
              <h2 style={{ color: '#f49d37' }}>
                MT{jsonMessage.block2.messageType}: ID{jsonMessage?.messageId}
              </h2>
              <div className="shadow-sm p-3 bg-white rounded">
                <JSONPretty className="ml-3" data={jsonMessage} />
              </div>
              <Button
                variant="secondary"
                className="row w-25 mt-2 mb-2 ml-1"
                onClick={() => sendMessage(jsonMessage.messageId)}
              >
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
