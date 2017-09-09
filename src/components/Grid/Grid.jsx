import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import './Grid.css';

export const Grid = ({ board, playerIcon }) => {
  const cells = board.map((cell, i) => (<Cell
    key={`cell-${i}`}
    icon={cell}
    isAI={cell !== playerIcon}
    cellNumber={i + 1}
  />));

  return (
    <div className='grid'>
      {cells}
    </div>
  );
};

Grid.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1])).isRequired,
  playerIcon: PropTypes.oneOf([-1, 0, 1]).isRequired,
};
