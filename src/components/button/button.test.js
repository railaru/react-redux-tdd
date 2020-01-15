import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/index';

import SharedButton from './button';

describe('shared button component', () => {
  describe('checking propTypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Test text',
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Test text',
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton />);
    });

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'shared-button');
      expect(button.length).toBe(1);
    });
  });
});
