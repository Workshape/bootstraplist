import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubscriptionForm from '../components/SubscriptionForm';

import * as Actions from '../actions';

class Subscribe extends Component {

  render() {
    let blank = (x) => {
      console.log('Submitted ', x);
    };

    return (
      <div className='BootstrapList-subscribe'>
        <SubscriptionForm onSubmit={blank} />
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
)(Subscribe);