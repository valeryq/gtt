import React, { Component, PropTypes } from 'react';

/**
 * Input component
 */
class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle change input
   *
   * @param e
   */
  handleChange(e) {
    this.state.value = this.isCheckbox() ? e.target.checked : e.target.value;
  }

  /**
   * Checks if input is checkbox
   *
   * @returns {boolean}
   */
  isCheckbox() {
    return this.props.type === 'checkbox';
  }

  /**
   * Render component
   *
   * @returns {XML}
   */
  render() {
    let errorClassName = null;
    const { id, type, name, prefixClassName, placeholder, label, value } = this.props;
    const inputProps = { id, type, name, placeholder, value, onChange: this.handleChange };
    const errors = this.props.errors.join(', ');

    if (errors) {
      errorClassName = `${prefixClassName}-input-${type}-invalid`;
    }

    return (
      <section className={`${prefixClassName}-field-${type}`}>
        {errors ? <span className={`${prefixClassName}-field-error-text`}>{errors}</span> : null}
        <input className={`${prefixClassName}-input-${type} ${errorClassName}`} { ...inputProps } />
        <label htmlFor={id}>{label}</label>
      </section>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  prefixClassName: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.array,
};

Input.defaultProps = {
  errors: [],
};

export default Input;
