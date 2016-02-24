import React, { PropTypes, Component } from 'react';

export default class AsyncBar extends Component {
  static propTypes = {
    isWorking : PropTypes.bool,
    error     : PropTypes.string
  };

  render() {
    let spinner = (this.props.isWorking) ? this.renderSpinner() : null,
      error = (this.props.error) ? this.renderError() : null;

    return (
      <div>
        {spinner}
        {error}
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className="spinner">
        Loading…
      </div>
    );
  }

  renderError() {
    return (
      <p className="box error">
        {this.props.error}
      </p>
    );
  }
}