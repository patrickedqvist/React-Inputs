import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputText extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue && !props.value ? props.defaultValue : props.value
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
    const value = event.target.value;
    this.setState(
      () => ({ value }),
      () => this.props.onChange(event)
    );
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
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        {renderError}
      </div>
    );
  }
}


InputText.defaultProps = {
  label: '',
  value: '',
  defaultValue: '',
  name: '',
  placeholder: '',
  className: 'form-group form-group--InputText',
  error: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
};

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

export default InputText;
