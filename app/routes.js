import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './view/App';
import Home from './view/Home';
import AddCompany from './view/AddCompany';
import About from './view/About';
import Subscribe from './view/Subscribe';
import Company from './view/Company';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='add-company' component={AddCompany} />
    <Route path='about' components={About} />
    <Route path='companies/:slug' components={Company} />
  </Route>
);