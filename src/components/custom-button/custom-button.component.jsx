import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, inverse,...otherProps}) => (
    <button 
        className={`${inverse ? 'inverse' : ''} custom-button`}
        {...otherProps}
    >
        {children}

    </button>
)


export default CustomButton;