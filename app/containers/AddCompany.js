import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompanyForm from '../components/CompanyForm';
import * as Actions from '../actions';

class AddCompany extends Component {

  onSubmit(company) {
      this.props.submitted = true;
      this.render();
  }

  render() {
    let formContent = this.getFormContent();

    return (
      <div className='view view-add'>

        <section className='heading soil'>
          <div className='inner'>

            <h1>Add a Company</h1>

            <h2 className='sub'>Submit your Organisation to The Bootstrap List</h2>

          </div>
        </section>

        <section className='sheet'>
          <div className='inner'>

            <h2>Application Form</h2>

            <h3 className='sub'>Know a company that's bootstrapping? Submit it to the list!</h3>

            {formContent}

          </div>
        </section>

      </div>
      );

  }

  getFormContent() {
    if (this.props.submitted) {
      return <div className='box success'>Thank you</div>;
    }

    return <CompanyForm onSubmit={this.onSubmit.bind(this)} editing={false} />;
  }

}

/*
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({}), 
  dispatch => bindActionCreators(Actions, dispatch)
)(AddCompany);