import React from 'react';
import './Cell.css';
import { Icons } from '../Icons';

export const Cell = props => (
    <div className={`cell-${props.cellNumber}`}>
        <Icons icon={props.icon} isAI={props.isAI} />
    </div>
);
