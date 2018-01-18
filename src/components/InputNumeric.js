import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { formatPrettyNumber } from '../internal/format';

class InputNumeric extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isEditing: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }

  handleOnChange(event) {

    if ( this.props.disabled ) {
      return null;
    }

    this.setState({
      value: event.target.value,
      isEditing: true
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }

  }

  handleOnBlur(event) {

    if ( this.props.disabled ) {
      return null;
    }

    this.setState({
      isEditing: false
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

  }

  handleOnFocus(event) {

    if ( this.props.disabled ) {
      return null;
    }

    this.setState({
      isEditing: true
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

  }

  render() {

    const inputValue = this.state.isEditing ?  this.state.value : formatPrettyNumber(this.state.value);

    return (
      <div className={this.props.className}>
        <input
          autoComplete={this.props.autoComplete}
          autoFocus={this.props.autoFocus}
          disabled={this.props.disabled}
          id={this.props.id}
          maxLength={this.props.maxLength}
          min={this.props.min}
          max={this.props.max}
          name={this.props.name}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onKeyDown={this.props.onKeyDown}
          onKeyPress={this.props.onKeyPress}
          onKeyUp={this.props.onKeyUp}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          readOnly={this.props.isReadOnly}
          required={this.props.required}
          spellCheck={this.props.isSpellCheckEnabled}
          type={this.props.type}
          value={inputValue} />
      </div>
    );
  }
}


InputNumeric.defaultProps = {
  className: 'field-text',
  disabled: false,
  isInvalid: false,
  isReadOnly: false,
  isSpellCheckEnabled: true,
  onChange: () => {},
  required: false,
  type: 'text',
  value: ''
};

InputNumeric.propTypes = {
  autoComplete: PropTypes.oneOf(['on', 'off']), // Standard HTML input autocomplete attribute.

  pattern: PropTypes.string, // Standard HTML input pattern attribute, used for validating using a regular expression.

  type: PropTypes.string, // Type value to be passed to the html input.

  disabled: PropTypes.bool, // Sets the field as uneditable, with a changed hover state.

  isReadOnly: PropTypes.bool, // If true, prevents the value of the input from being edited.

  required: PropTypes.bool, // Add asterisk to label. Set required for form that the field is part of.

  isInvalid: PropTypes.bool, // Sets styling to indicate that the input is invalid.

  label: PropTypes.string, // Label to be displayed above the input.

  name: PropTypes.string, // Name value to be passed to the html input.

  min:PropTypes.number, // Standard input min attribute, to be used with type="number"

  max:PropTypes.number, // Standard input max attribute, to be used with type="number"

  placeholder: PropTypes.string, // Text to display in the input if the input is empty.

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), // The value of the input.

  onBlur: PropTypes.func, // Handler to be called when the input loses focus.

  onChange: PropTypes.func, // Handler to be called when the input changes.

  onFocus: PropTypes.func, // Handler to be called when the input receives focus.

  onKeyDown: PropTypes.func, // Standard input onkeydown event.

  onKeyPress: PropTypes.func, // Standard input onkeypress event.

  onKeyUp: PropTypes.func, // Standard input onkeyup event.

  id: PropTypes.string, // Id value to be passed to the html input.

  isLabelHidden: PropTypes.bool, // Sets whether to show or hide the label.

  invalidMessage: PropTypes.element, // Provided component is rendered inside a modal dialogue when the field is selected.

  shouldFitContainer: PropTypes.bool, // Ensure the input fits in to its containing element.

  isSpellCheckEnabled: PropTypes.bool, // Sets whether to apply spell checking to the content.

  autoFocus: PropTypes.bool, // Sets whether the component should be automatically focused on component render.

  maxLength:PropTypes.number // Set the maximum length that the entered text can be.
}

export default InputNumeric;
