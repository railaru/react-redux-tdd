import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    const { title, description } = this.props;

    if (!title) {
      return null;
    }

    return (
      <li data-test="list-item">
        <h4 data-test="list-item__title">{title}</h4>
        <p data-test="list-item__description">{description}</p>
      </li>
    );
  }
}
