import React from 'react';
import classnames from 'classnames';
import { Circle } from './Circle';
import { Cross } from './Cross';
import './Icons.css'

export const Icons = props => {
  const className = classnames({ 'isAI': props.isAI });
  const icon = props.icon === 'circle' ?
    <Circle className={ className } /> :
    <Cross className={ className } />;

  return icon;
}
