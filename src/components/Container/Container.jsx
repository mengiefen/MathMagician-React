import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Container.css';

class Container extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="btn-holder">{children}</div>;
  }
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Container;
