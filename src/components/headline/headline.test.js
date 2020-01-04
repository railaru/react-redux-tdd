import React from 'react';

import { shallow } from 'enzyme';

import Headline from './headline';

import { findByTestAttr } from '../../../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test description'
      };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headline');
      expect(component.length).toBe(1);
    });

    it('should render a header', () => {
      const header = findByTestAttr(wrapper, 'headline__header');
      expect(header.length).toBe(1);
    });

    it('should render a description', () => {
      const description = findByTestAttr(wrapper, 'headline__desc');
      expect(description.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'headline');
      expect(component.length).toBe(0);
    });
  });
});
