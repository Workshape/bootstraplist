import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='BootstrapList-header'>
          <div className='BootstrapList-header-content'>
            <h1>The Bootstrap List</h1>
            <div className='BootstrapList-links'>
              <IndexLink to='/' activeClassName='active'>Home</IndexLink>
              <Link to='/add-company' activeClassName='active'>Add Company</Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}