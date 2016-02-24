import React, { Component, PropTypes } from 'react';
import { VALUE_CLASSES } from '../constants/ActionTypes.js';

export default class CompanyForm extends Component {
  static propTypes = {
    onSubmit : PropTypes.func.isRequired,
    editing  : PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors  : [],
      name    : this.props.name || '',
      website : this.props.website || '',
      about   : this.props.about || ''
    };
  }

  handleSubmit(e) {
    let errors;
    e.preventDefault();

    if (this.state.name.length === 0) {
      errors = ['You have not told us your company name!'];
    }

    if (this.state.website.length === 0) {
      errors = ['You have not given us us your website!'];
    }

    if (this.state.about.length === 0) {
      errors = ['You have not told us about why you want to be listed!'];
    }


    if (errors && errors.length > 0) {
      this.setState({errors: errors});
    } else {
      this.props.onSubmit({name: this.state.name, website: this.state.website, about: this.state.about});
      this.setState({name: '', website: '', about: ''});
    }
  }

  handleFieldChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let self = this,
      saveText = this.props.editing ? 'Save' : 'Apply';

    return (
      <form className='BootstrapList-companyForm pure-form'>

        <fieldset>

          <div className='field'>
            <label className='inline' htmlFor='name'>Company Name</label>
            <input type='text' id='name' placeholder='e.g. Workshape.io' autoFocus='true' value={this.state.name} onChange={::this.handleFieldChange('name')} />
          </div>

          <div className='field'>
            <label className='inline' htmlFor='website'>Website</label>
            <input type='text' id='website' placeholder='e.g. www.workshape.io' value={this.state.website} onChange={::this.handleFieldChange('website')} />
          </div>

          <div className='field'>
            <label className='inline' htmlFor='about'>One liner</label>
            <textarea id='about' placeholder='e.g. Workshape.io is a hiring platform.' onChange={::this.handleFieldChange('about')}>{this.state.about}</textarea>
          </div>

        </fieldset>
        <fieldset>

          <div className='field'>
            <button type='submit' className='save pure-button' onClick={::this.handleSubmit}>{saveText}</button>
          </div>

        </fieldset>
      </form>
    );
  }
}