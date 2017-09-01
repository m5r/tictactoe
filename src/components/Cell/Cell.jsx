import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Circle, Cross } from '../Icons';
import './Cell.css';

export const Cell = props => (
  <div className={`cell-${props.cellNumber}`}>
    {props.icon === 'circle' ?
      <Circle className={classnames({ isAI: props.isAI })} /> :
      <Cross className={classnames({ isAI: props.isAI })} />}
  </div>
);

Cell.propTypes = {
  cellNumber: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isAI: PropTypes.bool,
};

Cell.defaultProps = {
  isAI: false,
};
