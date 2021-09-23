import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { MessagePage } from 'app/pages/messagePage';
import { MessagesPage } from 'app/pages/MessagesPage/Loadable';
import { SendMessage } from 'app/pages/sendMessagePage/loadable';
import { SendJsonMessagePage } from 'app/pages/sendMessagePage/sendJsonMessage';
import { SendxmlMessagePage } from 'app/pages/sendMessagePage/sendXmlMessage';
import { StatisticsPage } from 'app/pages/statisticsPage/loadable';
import { uploadMessagePage } from 'app/pages/uploadMessagePage/Loadable';
import React from 'react';
import { Route, Router as BrowserRouter, Switch } from 'react-router-dom';
import history from './history';

interface Props {
  children(content: React.ReactElement): React.ReactElement;
}

const Router: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <BrowserRouter history={history}>
      {children(
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/messages" component={MessagesPage} />
          <Route exact path="/messages/:id" component={MessagePage} />
          <Route exact path="/upload-file" component={uploadMessagePage} />
          <Route exact path="/send-message" component={SendMessage} />
          <Route
            exact
            path="/send-message/json"
            component={SendJsonMessagePage}
          />
          <Route
            exact
            path="/send-message/xml"
            component={SendxmlMessagePage}
          />
          <Route exact path="/statistics" component={StatisticsPage} />
          <Route component={NotFoundPage} />
        </Switch>,
      )}
    </BrowserRouter>
  );
};

export default Router;
