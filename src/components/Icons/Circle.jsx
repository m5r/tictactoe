import React from 'react';
import PropTypes from 'prop-types';

export const Circle = props => (
  <svg className={props.className} xmlns='http://www.w3.org/2000/svg' width='24' height='28' viewBox='0 0 24 28'>
    <path
      d='M12 5.5c-4.688 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12v0c6.625 0 12 5.375 12 12z'
    />
  </svg>
);

Circle.propTypes = {
  className: PropTypes.string.isRequired,
};