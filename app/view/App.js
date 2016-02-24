import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../component/Header';
import Footer from '../component/Footer';
import AsyncBar from '../component/AsyncBar';

import * as Actions from '../actions';

class App extends Component {
  static propTypes = {
    isWorking : React.PropTypes.bool,
    error     : React.PropTypes.any,
  };

  render() {
    let actions = { 
      editEvent   : this.props.editEvent,
      deleteEvent : this.props.deleteEvent
    };

    return (
      <div>
        <Header />
        <AsyncBar isWorking={this.props.isWorking} error={this.props.error} />
          <div className='view-wrap'>
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}

/*
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    isWorking : state.app.isWorking,
    error     : state.app.error
  }), 
  dispatch => bindActionCreators(Actions, dispatch)
)(App);