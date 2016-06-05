import React, { PropTypes } from 'react';

/**
 * Button with icon component
 *
 * @param value
 * @param icon
 * @param className
 *
 * @returns {XML}
 * @constructor
 */
function ButtonIcon({ value, icon, className = '' }) {
  return (
    <a href="#" className={ className }>{ value }</a>
  );
}

ButtonIcon.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonIcon;
