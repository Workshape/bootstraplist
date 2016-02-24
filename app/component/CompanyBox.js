import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class CompanyBox extends Component {
  
  render() {
    return (
      <Link title={this.props.name} className='company-box' to={'/companies/' + this.props.id}>
        <img alt={this.props.name + ' logo'} className='logo' src={'/assets/logos/' + this.props.id + '.svg'} />
      </Link>
    );
  }

}