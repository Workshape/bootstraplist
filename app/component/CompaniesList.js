import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import companies from '../data/companies';
import CompanyBox from './CompanyBox';

export default class CompaniesList extends Component {
  
  render() {
    return (
      <ul className='companies-list'>
        {Object.keys(companies).map((id) => {
          return (<li><CompanyBox {...companies[id]} /></li>);
        })}
        <li className='submit'><Link to='/add-company' title='Submit a Company' /></li>
      </ul>
    );
  }

}