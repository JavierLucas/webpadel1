import React from 'react';
import './search-button.styles.css';

const SearchButton = ({children, ...props}) => (
    <button className='search-button' {...props}>
        {children}
    </button>
);

export default SearchButton;
