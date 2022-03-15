import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const {
      className,
      value,
      firstArgument,
      operator,
      secondArgument,
    } = this.props;
    return (
      <div className="display">
        <p className="display-top">
          {firstArgument}
          {operator}
          {secondArgument}
        </p>
        <p className={className}>
          {value}
        </p>
      </div>
    );
  }
}

Input.defaultProps = {
  firstArgument: '',
  secondArgument: '',
  operator: '',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  firstArgument: PropTypes.string,
  secondArgument: PropTypes.string,
  operator: PropTypes.string,
};

export default Input;
