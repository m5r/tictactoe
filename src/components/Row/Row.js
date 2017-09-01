import React from 'react';
import './Row.css';
import { Cell } from '../Cell'

export const Row = props => (
    <div className={`row-${props.rowNumber}`}>
        <Cell icon='cross' cellNumber={1} rowNumber={props.rowNumber} />
        <Cell icon='circle' isAI cellNumber={2} rowNumber={props.rowNumber} />
        <Cell icon='cross' cellNumber={3} rowNumber={props.rowNumber} />
    </div>
);
