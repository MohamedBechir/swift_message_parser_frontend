/**
 * Send JSON Message Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchJsonMessages } from './slice';
import {
  selectErrorMessage,
  selectIsError,
  selectIsSuccess,
  selectState,
} from './slice/selectors';
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
  const isSuccess = useSelector(selectIsSuccess);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  return (
    <>
      <CustomNavbar />
      <div className="row mr-5 ml-5" style={{ overflow: 'scroll' }}>
        <h3>JSON Files To Send:</h3>
        <div>
          {jsonMessages.jsonMessages.map(jsonMessage => (
            <>
              <h2 style={{ color: '#f49d37' }}>
                MT{jsonMessage.block2.messageType}: ID{jsonMessage?.messageId}
              </h2>
              <div className="shadow-sm p-3  mb-5 bg-white rounded">
                <JSONPretty className="ml-3" data={jsonMessage} />
                {jsonMessage.sentJson ? (
                  <div
                    className="shadow-sm p-1 rounded ml-3"
                    style={{ backgroundColor: '#9FE2BF', width: '10%' }}
                  >
                    <h5>Message Sent</h5>
                  </div>
                ) : (
                  <div
                    className="shadow-sm p-1 rounded ml-3"
                    style={{ backgroundColor: '#FA8072', width: '10%' }}
                  >
                    <h5>Message Received</h5>
                  </div>
                )}
              </div>
              {!jsonMessage.sentJson && (
                <Button
                  variant="secondary"
                  className="row w-25 mt-2 mb-4 ml-1"
                  onClick={() => sendMessage(jsonMessage.messageId)}
                >
                  Send to Queue
                </Button>
              )}
              <div>
                {isSuccess && (
                  <Badge className="mt-2 mb-3" variant="success">
                    Message Successfully sent To IBM MQ
                  </Badge>
                )}
                {isError && (
                  <Badge className="mt-2 mb-3" variant="danger">
                    {errorMessage}
                  </Badge>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
