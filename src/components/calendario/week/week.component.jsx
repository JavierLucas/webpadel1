import React from 'react';
import './week.styles.scss';

const WeekNames = ({...props}) =>
 (
            <div className='week-container'>
                {
                    (props.week).map((day, index) => ( index < props.days ? 
                        ((props.estado).hoy === day[1] ? (
                            <div className='week-day-today'>
                                <div className='week-day-number'>{day[1]}</div>
                                <div className='week-day-text'>{day[0]}</div>
                            </div>
                        ) : (
                                <div className='week-day'>
                                    <div className='week-day-number'>{day[1]}</div>
                                    <div className='week-day-text'>{day[0]}</div>
                                </div>
                            ) 
                            ) : null))
                }
            </div>
            
        );
export default WeekNames;