import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ value, className, onClick }) => {
  const handleClick = (e) => {
    onClick(e.currentTarget.value);
  };

  return (
    <input
      className={
        value === '/'
        || value === '+' || value === '-'
        || value === '=' || value === 'x'
          ? `${className} btn-color`
          : className
      }
      type="submit"
      value={value}
      onClick={handleClick}
    />
  );
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
