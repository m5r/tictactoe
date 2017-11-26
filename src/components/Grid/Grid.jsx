import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import './Grid.css';

export const Grid = ({ board, playerIcon, makeMove, playable }) => {
  const cells = board.map((cell, i) => (
    <Cell
      key={`cell-${i + 1}`}
      icon={cell}
      playerIcon={playerIcon}
      cellNumber={i + 1}
      makeMove={() => makeMove(i, playerIcon)}
      playable={playable}
    />
  ));

  return (
    <div className='grid'>
      {cells}
    </div>
  );
};

Grid.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1])).isRequired,
  playerIcon: PropTypes.oneOf([-1, 0, 1]).isRequired,
  makeMove: PropTypes.func.isRequired,
  playable: PropTypes.bool.isRequired,
};
