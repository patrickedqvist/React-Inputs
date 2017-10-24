import React from 'react';
import { shallow, mount } from 'enzyme';

// Component
import InputNumeric from '../../src/components/InputNumeric';

test('InputNumeric should render', () => {
  const wrapper = shallow(<InputNumeric />);
  expect(wrapper.exists()).toEqual(true);
});

test('InputNumeric should update state when props are updated', () => {
  const wrapper = shallow(<InputNumeric />);
  wrapper.setProps({ value: 1 });
  expect(wrapper.state('value')).toEqual(1);
});

test('InputNumeric should display a default value', () => {
  const wrapper = shallow(<InputNumeric defaultValue={1000} value={''} />);
  expect(wrapper.state('value')).toEqual(1000);
});

test('InputNumeric should display a normal value even if a default value is present', () => {
  const wrapper = shallow(<InputNumeric defaultValue={10} value={1337} />);
  expect(wrapper.state('value')).toEqual(1337);
});

test('InputNumeric should change defaultValue when value props is updated', () => {
  const wrapper = shallow(<InputNumeric defaultValue={1} />);
  wrapper.setProps({ value: 420 });
  expect(wrapper.state('value')).toEqual(420);
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

test('InputNumeric should render label if label prop is present', () => {
  const wrapper = shallow(<InputNumeric label={'Input Label'} />);
  expect(wrapper.find('label').exists()).toEqual(true);
  expect(wrapper.find('label').text()).toEqual('Input Label');
});

test('InputNumeric should render error if error prop is present', () => {
  const wrapper = shallow(<InputNumeric error={'Input Error'} />);
  expect(wrapper.find('span').exists()).toEqual(true);
  expect(wrapper.find('span').text()).toEqual('Input Error');
});

test('InputNumeric should have its default className', () => {
  const wrapper = shallow(<InputNumeric />);
  expect(wrapper.hasClass('form-group form-group--InputNumeric')).toEqual(true);
});

test('InputNumeric should change className', () => {
  const wrapper = shallow(<InputNumeric />);
  wrapper.setProps({ className: 'my-input' });
  expect(wrapper.hasClass('my-input')).toEqual(true);
});
