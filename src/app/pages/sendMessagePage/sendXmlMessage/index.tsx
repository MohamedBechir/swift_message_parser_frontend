/**
 * Send XML Message Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchXmlMessages } from './slice';
import { selectState } from './slice/selectors';
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
              </div>
              <Button
                variant="secondary"
                className="row w-25 mt-2 mb-2 ml-1"
                onClick={() => sendMessage(xmlMessage.messageID)}
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
