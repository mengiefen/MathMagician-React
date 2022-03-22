import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children }) => <div className="btn-holder">{children}</div>;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Container;
