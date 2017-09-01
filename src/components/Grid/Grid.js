import React from 'react';
import './Grid.css';
import { Row } from '../Row'

export const Grid = props => (
    <div className='grid'>
        <Row rowNumber={1} />
        <Row rowNumber={2} />
        <Row rowNumber={3} />
    </div>
);
