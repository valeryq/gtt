import React, { PropTypes } from 'react';

/**
 * Input component
 *
 * @param id
 * @param type
 * @param name
 * @param className
 * @param placeholder
 * @param label
 * @return {XML}
 * @constructor
 */
function Input({ id, type, name, className, placeholder, label }) {

  const inputProps = { id, type, name, className, placeholder };

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <input { ...inputProps } />
    </span>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
