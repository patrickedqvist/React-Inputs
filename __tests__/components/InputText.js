import React from 'react';
import { shallow, mount } from 'enzyme';

// Component
import InputText from '../../src/components/InputText';

test('InputText should render', () => {
  const wrapper = shallow(<InputText />);
  expect(wrapper.exists()).toEqual(true);
});

test('InputText should update state when props are updated', () => {
  const wrapper = shallow(<InputText />);
  wrapper.setProps({ value: 'newValue' });
  expect(wrapper.state('value')).toEqual('newValue');
});

test('InputText should display a default value', () => {
  const wrapper = shallow(<InputText defaultValue={'A Default Value'} value={''} />);
  expect(wrapper.state('value')).toEqual('A Default Value');
});

test('InputText should display a normal value even if a default value is present', () => {
  const wrapper = shallow(<InputText defaultValue={'A Default Value'} value={'A Normal Value'} />);
  expect(wrapper.state('value')).toEqual('A Normal Value');
});

test('InputText should change defaultValue when value props is updated', () => {
  const wrapper = shallow(<InputText defaultValue={'A Default Value'} />);
  wrapper.setProps({ value: 'Updated Value' });
  expect(wrapper.state('value')).toEqual('Updated Value');
});

test('InputText should change value on user input', () => {
  const wrapper = shallow(<InputText />);
  wrapper.find('input').simulate('change', { target: { value: 'Hello World!' }});
  expect(wrapper.state('value')).toEqual('Hello World!');
});

test('InputText should trigger "onChange" on user input', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<InputText onChange={onChange} />);
  wrapper.find('input').simulate('change', { target: { value: 'Hello World!' }});
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('InputText should trigger "onFocus" on user input', () => {
  const onFocus = jest.fn();
  const wrapper = shallow(<InputText onFocus={onFocus} />);
  wrapper.find('input').simulate('focus');
  expect(onFocus).toHaveBeenCalledTimes(1);
});

test('InputText should trigger "onBlur" on user input', () => {
  const onBlur = jest.fn();
  const wrapper = shallow(<InputText onBlur={onBlur} />);
  wrapper.find('input').simulate('blur');
  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('InputText should render label if label prop is present', () => {
  const wrapper = shallow(<InputText label={'Input Label'} />);
  expect(wrapper.find('label').exists()).toEqual(true);
  expect(wrapper.find('label').text()).toEqual('Input Label');
});

test('InputText should render error if error prop is present', () => {
  const wrapper = shallow(<InputText error={'Input Error'} />);
  expect(wrapper.find('span').exists()).toEqual(true);
  expect(wrapper.find('span').text()).toEqual('Input Error');
});

test('InputText should have its default className', () => {
  const wrapper = shallow(<InputText />);
  expect(wrapper.hasClass('form-group form-group--InputText')).toEqual(true);
});

test('InputText should change className', () => {
  const wrapper = shallow(<InputText />);
  wrapper.setProps({ className: 'my-input' });
  expect(wrapper.hasClass('my-input')).toEqual(true);
});
