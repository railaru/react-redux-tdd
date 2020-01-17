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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();

      const props = {
        buttonText: 'Test text',
        emitEvent: mockFunc
      };

      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'shared-button');
      expect(button.length).toBe(1);
    });

    it('should emit a callback on click event once', () => {
      const button = findByTestAttr(wrapper, 'shared-button');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
