import React from 'react';
import logo from './logo.svg';
import './Header.css';

export const Header = () => (
  <header>
    <img src={logo} className='logo' alt='logo' />
    <h2>Welcome to React</h2>
  </header>
);
