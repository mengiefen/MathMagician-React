import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const { className, value } = this.props;
    return (
      <input
        type="text"
        className={className}
        disabled
        value={value}
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
