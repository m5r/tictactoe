import React from 'react';
import PropTypes from 'prop-types';
import { Computer, Gear, User } from '../Icons';
import './Footer.css';

export const Footer = ({ playerIcon, onSelectIcon, turnPlayer, endGameMessage }) => {
  const message =
    playerIcon === 0 ?
      'Who starts?' :
      endGameMessage ? endGameMessage :
        turnPlayer === playerIcon ?
          'Go.' :
          <Gear className='loading' />;

  return (
    <footer>
      <div className='computer'>
        <span onClick={() => onSelectIcon(-1)}>
          <Computer />
          <p>You start{turnPlayer ? ' over' : ''}.</p>
        </span>
      </div>
      <div className='message'>
        <p>{message}</p>
      </div>
      <div className='user'>
        <span onClick={() => onSelectIcon(1)}>
          <User />
          <p>I&#x27;ll start{turnPlayer ? ' over' : ''}.</p>
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  playerIcon: PropTypes.oneOf([-1, 0, 1]).isRequired,
  onSelectIcon: PropTypes.func.isRequired,
  turnPlayer: PropTypes.oneOf([-1, 0, 1]).isRequired,
  endGameMessage: PropTypes.string.isRequired,
};
