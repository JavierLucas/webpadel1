import React from 'react';
import FooterCard from '../footer-card/footer-card.component';
import './footer-list.styles.scss';

const FooterList = ({items}) => (
    <div className='footer-list-container'>
        {
            items.map(item => (<FooterCard key={item.title} title={item.title} {...item}/>))
        }
    </div>
);

export default FooterList;