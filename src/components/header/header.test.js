import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils';
import Header from './header';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  it('should display an app name', () => {
    const logo = findByTestAttr(component, 'header__brand');
    expect(logo.length).toBe(1);
  });
});
