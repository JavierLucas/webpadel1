import React from 'react'
import { Link } from 'react-router-dom';
import './card.styles.css'
export const Card = props => (
    <Link className='card-container' to='/classInfo'>
        <div className='img-cont'>
            <img
                alt='monster'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg4.goodfon.com%2Fwallpaper%2Fbig%2F3%2F67%2Flow-poly-tennis-raketka-miach-igra-tennisist.jpg&f=1&nofb=1'
            />
        </div>
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>
    </Link>
);