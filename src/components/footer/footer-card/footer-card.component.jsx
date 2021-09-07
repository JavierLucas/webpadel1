import React from 'react';
import './footer-card.styles.scss';

const FooterCard = ({title, ...props}) => (
    <div className='footer-card-container'>
       <h2 className='footer-card-title'>{title}</h2>
       <div className='footer-card-links'>
            {
                props.links.map((link) => (<a key={link.text} className='footer-card-link' href={link.link}>{link.text}</a>))
            }
       </div>
    </div>
);

export default FooterCard;