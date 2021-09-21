/**
 * Send XML Message Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchXmlMessages } from './slice';
import {
  selectErrorMessage,
  selectIsError,
  selectIsSuccess,
  selectState,
} from './slice/selectors';
import XMLViewer from 'react-xml-viewer';
import '../sendXmlMessage/design.css';

const customTheme = {
  tagColor: '#f92672',
  textColor: '#fd971f',
  separatorColor: 'black',
};

export function SendxmlMessagePage() {
  const { actions } = useFetchXmlMessages();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.requestFetchXmlMessages());
  }, [actions, dispatch]);
  const xmlMessages = useSelector(selectState);
  xmlMessages.XmlMessages.map(msg => console.log(msg.messageID));
  const sendMessage = id => {
    dispatch(actions.requestSendMessage({ id: id }));
  };

  console.log(xmlMessages);

  const isSuccess = useSelector(selectIsSuccess);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <>
      <CustomNavbar />
      <div className="row mr-5 ml-5">
        <h3>XML Files To Send:</h3>
        <div>
          {xmlMessages.XmlMessages.map(xmlMessage => (
            <>
              <h2 style={{ color: '#f49d37' }}>
                {' '}
                MT{xmlMessage.messageType}: ID{xmlMessage.messageID}
              </h2>
              <div className="shadow-sm p-3 ml-1 bg-white rounded">
                <XMLViewer
                  className="bechir mt-3"
                  xml={xmlMessage.messages}
                  theme={customTheme}
                />
                {xmlMessage.sentXml ? (
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
              {!xmlMessage.sentXml && (
                <Button
                  variant="secondary"
                  className="row w-25 mt-2 mb-2 ml-1"
                  onClick={() => sendMessage(xmlMessage.messageID)}
                >
                  Send to Queue
                </Button>
              )}
              <div>
                {isSuccess && (
                  <Badge className="mt-2" variant="success">
                    Message Successfully sent To IBM MQ
                  </Badge>
                )}
                {isError && (
                  <Badge className="mt-2" variant="danger">
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
