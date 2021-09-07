import React from 'react';
import FooterList from './footer-list/footer-list.component';
import './footer.styles.scss';

const Footer = ({text, data}) => (
    <div className='footer-container' key='abcd'>
        <h2 className='footer-title'>WebPadel tu página para aprender a jugar pádel</h2>
        <FooterList items={data} />
        <div className='copyright'>
            &copy; {text}
        </div>
    </div>
);

export default Footer;