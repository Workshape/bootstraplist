import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompanyForm from '../components/CompanyForm';
import * as Actions from '../actions';

class AddCompany extends Component {
  render() {
    let blank = (x) => {
      console.log('Submitted ', x);
    };

    return (
      <div className='BootstrapList-addCompany'>
        <h3>Add a Company</h3>
        <p>If you know of a startup that is bootstrapping, or you are part of one, add yourself here. We will be in touch to find out more about your business and include you on our site.</p>
        <CompanyForm onSubmit={blank} editing={false} />
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({}), 
  dispatch => bindActionCreators(Actions, dispatch)
)(AddCompany);