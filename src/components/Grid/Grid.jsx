import React from 'react';
import { Row } from '../Row';
import './Grid.css';

export const Grid = () => (
  <div className='grid'>
    <Row rowNumber={1} />
    <Row rowNumber={2} />
    <Row rowNumber={3} />
  </div>
);
