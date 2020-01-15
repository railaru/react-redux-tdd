import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/index';

import ListItem from './listItem';

describe('list item component', () => {
  describe('checking propTypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        title: 'Test title',
        description: 'Test description'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('should render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        description: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('should render a list item', () => {
      const listItem = findByTestAttr(wrapper, 'list-item');
      expect(listItem.length).toBe(1);
    });

    it('should render a list item title', () => {
      const listItemTitle = findByTestAttr(wrapper, 'list-item__title');
      expect(listItemTitle.length).toBe(1);
    });

    it('should render a list item description', () => {
      const listItemDesc = findByTestAttr(wrapper, 'list-item__description');
      expect(listItemDesc.length).toBe(1);
    });
  });

  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('should not render if no title', () => {
      const listItem = findByTestAttr(wrapper, 'list-item');
      expect(listItem.length).toBe(0);
    });
  });
});
