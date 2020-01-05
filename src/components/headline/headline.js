import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    } else {
      return (
        <div data-test="headline">
          <h1 data-test="headline__header">{header}</h1>
          <p data-test="headline__desc">{desc}</p>
        </div>
      );
    }
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};
