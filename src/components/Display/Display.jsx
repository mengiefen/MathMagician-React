import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const {
    className, value, total, operation, next,
  } = props;

  return (
    <div className="display">
      <p className="display-top">
        {total}
        {operation}
        {next}
      </p>
      <p className={className}>{value}</p>
    </div>
  );
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
  value: '',
};

Display.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
