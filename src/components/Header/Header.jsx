import React from 'react';
import { Sauron } from '../Icons';
import './Header.css';

export const Header = () => (
  <header>
    <Sauron className='logo' alt='logo' />
    <h1>Tic Tac Toe</h1>
  </header>
);
