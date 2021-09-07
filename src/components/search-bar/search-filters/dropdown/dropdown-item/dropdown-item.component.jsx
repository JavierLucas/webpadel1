import React from 'react';
import './dropdown-item.styles.css';

export const LevelItem = ({values}) => (
    <div className='item-container'>
        <div className='item-icon-container'>
            <div className='item-icon' id={values[0]} style={values[1]} />
        </div>
        <span className='item-text'>{values[0]}</span>
    </div>
);

export const HourItem = ({values}) => (
    <div className='item-containerr'>
        <div className='item-text'>{values[0]}</div>
    </div>
);

export const DateItem = ({values}) => (
    <div className='date-buttons-container'>
        <div className='date-text'>{values[0]}</div>
    </div>
);