import React, { PropTypes, Component } from 'react';
import companies from '../data/companies';

export default class AsyncBar extends Component {
  
  render() {
    console.log(companies);

    return (
      <ul className='companies-list'>
      </ul>
    );
  }

}