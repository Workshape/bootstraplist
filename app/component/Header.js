import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='inner'>

            <Link className='logo' to='/'>
              The Bootstrap List
            </Link>

            <ul className='nav'>
              <IndexLink to='/' activeClassName='active'>Companies</IndexLink>
              <Link to='/add-company' activeClassName='active'>Add Company</Link>
            </ul>

          </div>
        </header>
      </div>
    );
  }
}