import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import './Row.css';

export const Row = props => (
  <div className={`row-${props.rowNumber}`}>
    <Cell icon='cross' cellNumber={1} />
    <Cell icon='circle' isAI cellNumber={2} />
    <Cell icon='cross' cellNumber={3} />
  </div>
);

Row.propTypes = {
  rowNumber: PropTypes.number.isRequired,
};
