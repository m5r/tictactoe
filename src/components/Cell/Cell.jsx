import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Circle, Cross } from '../Icons';
import './Cell.css';

export class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  getContentToRender() {
    const { icon, playerIcon, turnPlayer } = this.props;
    const { hover } = this.state;

    const isAI = icon !== playerIcon;

    if (turnPlayer === playerIcon && hover) {
      switch (playerIcon) {
        case -1:
          return <Circle className={classnames({ human: !isAI, computer: isAI, hover })} />;
        case 1:
          return <Cross className={classnames({ human: !isAI, computer: isAI, hover })} />;
        default:
          return <div />;
      }
    }

    switch (icon) {
      case -1:
        return <Circle className={classnames({ human: !isAI, computer: isAI })} />;
      case 1:
        return <Cross className={classnames({ human: !isAI, computer: isAI })} />;
      default:
        return <div />;
    }
  }

  render() {
    const { cellNumber, makeMove, playerIcon, turnPlayer } = this.props;

    return (
      <div
        className={`cell-${cellNumber}`}
        onClick={() => turnPlayer === playerIcon && makeMove()}
        onMouseEnter={() => {
          this.setState({
            hover: true,
          });
        }}
        onMouseLeave={() => {
          this.setState({
            hover: false,
          });
        }}
      >
        {this.getContentToRender()}
      </div>
    );
  }
}

Cell.propTypes = {
  cellNumber: PropTypes.number.isRequired,
  icon: PropTypes.oneOf([-1, 0, 1]).isRequired,
  playerIcon: PropTypes.oneOf([-1, 0, 1]).isRequired,
  makeMove: PropTypes.func.isRequired,
  turnPlayer: PropTypes.oneOf([-1, 0, 1]).isRequired,
};
