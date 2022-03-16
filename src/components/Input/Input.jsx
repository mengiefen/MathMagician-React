import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const {
      className,
      value,
      total,
      operation,
      next,
    } = this.props;
    return (
      <div className="display">
        <p className="display-top">
          {total}
          {operation}
          {next}
        </p>
        <p className={className}>
          {value}
        </p>
      </div>
    );
  }
}

Input.defaultProps = {
  total: '',
  next: '',
  operation: '',
  value: '',
};

Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Input;
