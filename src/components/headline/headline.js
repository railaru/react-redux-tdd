import React, { Component } from 'react';

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
