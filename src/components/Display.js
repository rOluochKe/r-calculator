import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Display = ({ result, display }) => <input type="text" defaultValue={result} className="display" />;

Display.defaultValue = { result: '0' };
Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
