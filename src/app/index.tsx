/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { MessagesPage } from './pages/MessagesPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { MessagePage } from './pages/messagePage';
import { uploadMessagePage } from './pages/uploadMessagePage/Loadable';
import { SendMessage } from './pages/sendMessagePage/loadable';
import { SendJsonMessagePage } from './pages/sendMessagePage/sendJsonMessage';
import { SendxmlMessagePage } from './pages/sendMessagePage/sendXmlMessage';
import { StatisticsPage } from './pages/statisticsPage/loadable';
import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="SMP"
          defaultTitle="SMP"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta
            name="description"
            content="Web Platform for parsing SWIFT Messages"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          />
        </Helmet>

        <Switch>
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
        </Switch>
      </BrowserRouter>
    </>
  );
}
