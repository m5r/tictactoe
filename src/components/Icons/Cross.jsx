import React from 'react';
import PropTypes from 'prop-types';

export const Cross = ({ className }) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 768 768'>
    <path
      d='M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z'
    />
  </svg>
);

Cross.propTypes = {
  className: PropTypes.string,
};

Cross.defaultProps = {
  className: '',
};

