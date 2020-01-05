import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SharedButton extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
  };

  submitEvent() {
    if (this.props.emitEvent()) {
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <button data-test="shared-button" onClick={() => this.submitEvent()}>
        {buttonText}
      </button>
    );
  }
}
