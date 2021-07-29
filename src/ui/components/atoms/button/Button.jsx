import React from 'react';

import './button.css';

function Button({ children, className }) {
    return (
        <div tabIndex={0} className={`button ${className}`}>
            {children}
        </div>
    );
}

export default Button;
