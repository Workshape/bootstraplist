import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class About extends Component {
  render() {
    return (
      <div className='BootstrapList-about'>
        <p>
        We believe the status of being a bootstrapped startup should be something you should be proud of. 
        We, the team behind Workshape.io, are a bootstrapped start-up with two of our co-founders working other jobs for 50% time.
        </p>
      </div>
    );
  }
}