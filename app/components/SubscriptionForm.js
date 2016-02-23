import React, { Component, PropTypes } from 'react';
import { VALUE_CLASSES } from '../constants/ActionTypes.js';

import AsyncBar from './AsyncBar';

export default class SubscriptionForm extends Component {
  static propTypes = {
    onSubmit   : PropTypes.func.isRequired,
    subscribed : PropTypes.bool.isRequired,
    error      : PropTypes.string,
    isWorking  : PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      errors : [],
      name   : this.props.name || '',
      email  : this.props.email || ''
    };
  }

  handleSubmit(e) {
    let errors = [];

    e.preventDefault();

    if (this.state.name.length === 0) {
      errors = [ 'Name missing' ];
    }

    if (this.state.email.length === 0) {
      errors = [ ...errors, 'Email missing'];
    }

    if (errors && errors.length) {
      this.setState({errors: errors});
    } else {
      this.props.onSubmit({name: this.state.name, email: this.state.email});
      this.setState({ name: '', email: '' });
    }
  }

  handleFieldChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  getFormContent() {
    if (this.props.subscribed) {
      return (
        <div className='box success'>
          Thank you. We'll be in touch by the end of March with our first update!
        </div>
        );
    }

    return (
      <form onSubmit={::this.handleSubmit}>

        <fieldset>

          <div className='field'>
            <label className='inline' htmlFor='name'>Your Name</label>
            <input type='text' id='name' placeholder='e.g. Frank Zappa' autoFocus='true' value={this.state.name} onChange={::this.handleFieldChange('name')} />
          </div>

          <div className='field'>
            <label className='inline' htmlFor='email'>Your Email</label>
            <input type='email' id='email' placeholder='e.g. frank@zapping.io' value={this.state.email} onChange={::this.handleFieldChange('email')} />
          </div>

        </fieldset>
        <fieldset>

          { this.state.errors.length ? (
            <div className='box error'>
              <ul>
                {this.state.errors.map((error) => {
                  return <li>{error}</li>;
                })}
              </ul>
            </div>
          ) : null }

          <button type='submit' className='save pure-button'>Subscribe</button>

          <AsyncBar {...this.props} />

        </fieldset>

      </form>
    );
  }

  render() {
    let formContent = this.getFormContent();

    return (
      <div>

        <h2>Subscribe to Updates</h2>

        <h3 className='sub'>Receive updates about these companies</h3>

        {formContent}

      </div>
    );
  }
}