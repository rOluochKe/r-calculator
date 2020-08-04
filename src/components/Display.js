/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    const { total, next, operation } = this.props;
    return <div className="display">{operation ? next : total}</div>;
  }
}

Display.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
