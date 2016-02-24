import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import routes from '../app/routes';
import store from '../app/store';
import * as actions from '../app/actions';
import Root from '../app/view/root';

import { setupRealtime } from './Realtime';

import '../style/index.styl';

/**
 * Render the page
 */
ReactDOM.render(
  <Root store={store} routing={routes} />,
  document.getElementById('app')
);

/**
 * Set up client-side realtime comms
 */
setupRealtime(store, actions);
