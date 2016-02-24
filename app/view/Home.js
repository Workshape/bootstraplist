import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesList from '../component/CompaniesList';

import SubscriptionForm from '../component/SubscriptionForm';

import * as Actions from '../actions';

class Home extends Component {

  render() {
    return (
      <div className='view view-home'>

        <section className='heading soil'>
          <div className='inner'>

          <img className='head-logo' src='/assets/logos/bootstrap-list.svg' />

            <h1>The Bootstrap List</h1>

            <h2 className='sub'>
              The Bootstrap List proudly represents companies who are bootstrapping. 
              This is a resource for finding out about, and discovering, startups 
              who have plied their way off nothing but their own savings and revenue.
              <br />
              <br />
              We wish to celebrate the accomplishments of the bootstrapped startup 
              and bring awareness to others of companies that operate in this manner. 
              We will be accepting submissions to our list shortly.
            </h2>

          </div>
        </section>
        <section className='sheet'>
          <div className='inner'>

          <h2>Companies</h2>

          <br />
          <br />

          <CompaniesList />

          </div>
        </section>
        <section className='sheet'>
          <div className='inner'>

          <SubscriptionForm {...this.props} />

          </div>
        </section>

      </div>
    );
  }

}

/*
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    subscribed : state.app.subscribed || false,
    error      : state.app.error,
    isWorking  : state.app.isWorking
  }), 
  dispatch => bindActionCreators({
    onSubmit : Actions.addSubscription
  }, dispatch)
)(Home);