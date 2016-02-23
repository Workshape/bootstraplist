import React, { PropTypes, Component } from 'react';
import companies from '../data/companies';
import CompanyBox from './CompanyBox';

export default class CompaniesList extends Component {
  
  render() {
    return (
      <ul className='companies-list'>
        {Object.keys(companies).map((id) => {
          return (<li><CompanyBox {...companies[id]} /></li>);
        })}
      </ul>
    );
  }

}