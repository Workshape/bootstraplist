import React, { Component, PropTypes } from 'react';
import { VALUE_CLASSES } from '../constants/ActionTypes.js';

import AsyncBar from './AsyncBar';

export default class SubscriptionForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    subscribed: PropTypes.bool.isRequired,
    error: PropTypes.string,
    isWorking: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: [],
      name: this.props.name || '',
      email: this.props.email || ''
    };
  }

  handleSubmit(e) {
    let errors;
    e.preventDefault();

    if (this.state.name.length === 0) {
      errors = ['You have not told us your name!'];
    }

    if (this.state.email.length === 0) {
      errors = [ ...errors, 'You have not given us us your email!'];
    }

    if (errors && errors.length > 0) {
      this.setState({errors: errors});
    } else {
      this.props.onSubmit({name: this.state.name, email: this.state.email});
      this.setState({name: '', email: ''});
    }
  }

  handleFieldChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let self = this;
    let saveText = 'Subscribe';
    let disabled = false;

    if (this.props.subscribed) {
      return (
        <div className='BootstrapList-subscriptionForm-container'>
          <h3>Thank you for subscribing</h3>
          <p>We'll be in touch by the end of March with our first update!</p>
        </div>
      );
    } else {
      return (
        <div className='BootstrapList-subscriptionForm-container'>
          <h3>Subscribe to Updates</h3>
          <p>In the mean time, if you would like to be kept up to date with our latest new please enter your details below</p>
          <form className='BootstrapList-subscriptionForm pure-form'>
            <fieldset>
              <label htmlFor='name'>Your Name</label>
              <input type='text' id='name' placeholder='e.g. Frank Zappa' autoFocus='true' value={this.state.name} onChange={::this.handleFieldChange('name')} />
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Your Email</label>
              <input type='email' id='email' placeholder='e.g. frank@zapping.io' value={this.state.email} onChange={::this.handleFieldChange('email')} />
            </fieldset>
            <fieldset>
              <button type='submit' className='save pure-button' disabled={disabled} onClick={::this.handleSubmit}>{saveText}</button>
              <AsyncBar {...this.props} />
            </fieldset>
          </form>
        </div>
      );
    }
  }
}