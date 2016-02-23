import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import * as subscriptionService from '../api/service/subscription';
import configureStore from '../../app/store';
import routes from '../../app/routes';
import DevTools from '../../app/containers/devTools';

const isDev = (process.env.NODE_ENV !== 'production');

/*
 * Server
 *
 * Configures and starts Express server
 */
export function handleRender(req, res) {
  console.log(' [x] Request for', req.url);
  subscriptionService.getSubscriptions()
  .then(subscriptions => {

    let initialState = { app: { subscriptionCount: subscriptions.length } };

    const store = configureStore(req, initialState);

    // Wire up routing based upon routes
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error)  {
        console.log('Error', error);
        res.status(400);
        res.send(error);
        return;
      }

      if (redirectLocation) {
        res.redirect(redirectLocation);
        return;
      }

      const devTools = isDev ? <DevTools /> : null;

      // Render the component to a string
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <div>
            <RouterContext {...renderProps} />
            {devTools}
          </div>
        </Provider>
      );

      // Send the rendered page back to the client with the initial state
      res.render('index', { isProd: (!isDev), html: html, initialState: JSON.stringify(store.getState()) });
    });
  });
}