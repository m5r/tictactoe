import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Circle, Cross } from '../Icons';
import './Cell.css';

export const Cell = ({ cellNumber, icon, isAI }) => {
  let content;

  switch (icon) {
    case -1:
      content = <Circle className={classnames({ isAI })} />;
      break;
    case 1:
      content = <Cross className={classnames({ isAI })} />;
      break;
    default:
      content = <div />;
  }

  return (
    <div className={`cell-${cellNumber}`}>
      {content}
    </div>
  );
};

Cell.propTypes = {
  cellNumber: PropTypes.number.isRequired,
  icon: PropTypes.oneOf([-1, 0, 1]).isRequired,
  isAI: PropTypes.bool,
};

Cell.defaultProps = {
  isAI: false,
};
