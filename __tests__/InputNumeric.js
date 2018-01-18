import React from 'react';
import { shallow, mount } from 'enzyme';

// Component
import InputNumeric from '../src/components/InputNumeric';

test('InputNumeric should render', () => {
  const wrapper = shallow(<InputNumeric />);
  expect(wrapper.exists()).toEqual(true);
});

test('InputNumeric should update state when props are updated', () => {
  const wrapper = shallow(<InputNumeric value={'1'} />);
  expect(wrapper.state('value')).toEqual('1');
});

test('InputNumeric should change value on user input', () => {
  const wrapper = shallow(<InputNumeric />);
  wrapper.find('input').simulate('change', { target: { value: 1337 }});
  expect(wrapper.state('value')).toEqual(1337);
});

test('InputNumeric should trigger "onChange" on user input', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<InputNumeric onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 1000 }});
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('InputNumeric should trigger "onFocus" on user input', () => {
  const onFocus = jest.fn();
  const wrapper = shallow(<InputNumeric onFocus={onFocus} />);
  wrapper.find('input').simulate('focus');
  expect(onFocus).toHaveBeenCalledTimes(1);
});

test('InputNumeric should trigger "onBlur" on user input', () => {
  const onBlur = jest.fn();
  const wrapper = shallow(<InputNumeric onBlur={onBlur} />);
  wrapper.find('input').simulate('blur');
  expect(onBlur).toHaveBeenCalledTimes(1);
});
