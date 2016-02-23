import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import AddCompany from './containers/AddCompany';
import About from './containers/About';
import Subscribe from './containers/Subscribe';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='add-company' component={AddCompany} />
    <Route path='about' components={About}/>
  </Route>
);