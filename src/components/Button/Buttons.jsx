import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  handleClick= (e) => {
    const { onClick } = this.props;
    onClick(e.currentTarget.value);
  }

  render() {
    const { value, className } = this.props;
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
        onClick={this.handleClick}
      />
    );
  }
}

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
