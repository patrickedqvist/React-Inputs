import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { toRawValue, toNumericValue } from '../helpers/format';

class InputNumeric extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      rawValue: toRawValue(props.value, props.isDecimal),
      displayValue: toNumericValue(props.value, props.isDecimal),
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.value ) {
      this.setState(() => ({ value: nextProps.value }));
    }
  }

  handleOnChange(event) {
    const { value } = event.target;

    this.setState({
      rawValue: toRawValue(value, this.props.isDecimal),
      displayValue: toNumericValue(toRawValue(value, this.props.isDecimal), this.props.isDecimal),
    });

    // Allow clearing of field to be valid input.
    const rawValue = value === '' ? '' : toRawValue(value, this.props.isDecimal);
    this.props.onChange(rawValue);
  }

  handleOnFocus(event) {
    this.props.onFocus(event);
  }

  handleOnBlur(event) {
    this.props.onBlur(event);
  }

  render() {

    // Render label if the label prop is truthy
    const renderLabel = this.props.label ? <label htmlFor={this.props.name}>{this.props.label}</label> : null;

    // Render error if the error props is truthy
    const renderError = this.props.error ? <span>{this.props.error}</span> : null;

    return (
      <div className={this.props.className}>
        {renderLabel}
        <input
          type="text"
          id={this.props.name}
          name={this.props.name}
          value={this.state.displayValue}
          placeholder={this.props.placeholder}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          disabled={this.props.disabled}
        />
        {renderError}
      </div>
    );
  }
}


InputNumeric.defaultProps = {
  label: '',
  value: '',
  defaultValue: '',
  name: '',
  placeholder: '',
  className: 'form-group form-group--InputNumeric',
  error: '',
  disabled: false,
  isDecimal: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
};

InputNumeric.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  isDecimal: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

export default InputNumeric;
