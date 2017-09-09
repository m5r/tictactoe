import React from 'react';
import PropTypes from 'prop-types';
import { Computer, User } from '../Icons';
import './Footer.css';

export const Footer = ({ message, onSelectIcon }) => (
  <footer>
    <div className='computer'>
      <span onClick={() => onSelectIcon(-1)}>
        <Computer />
        <p>You start</p>
      </span>
    </div>
    <div className='message'>
      <p>{message}</p>
    </div>
    <div className='user'>
      <span onClick={() => onSelectIcon(1)}>
        <User />
        <p>I&#x27;ll start</p>
      </span>
    </div>
  </footer>
);

Footer.propTypes = {
  message: PropTypes.string.isRequired,
  onSelectIcon: PropTypes.func.isRequired,
};
