import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttr, testStore } from '../utils';

import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text'
        },
        {
          title: 'Example title 2',
          body: 'Some text'
        },
        {
          title: 'Example title 3',
          body: 'Some text'
        }
      ]
    };
    wrapper = setUp();
  });

  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'app-component');

    expect(component.length).toBe(1);
  });
});
