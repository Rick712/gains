import React from 'react';

import './card.css';

function Card({ children, onClick }) {
    return (
        <div onClick={onClick} tabIndex={0} className="card">
            {children}
        </div>
    );
}

export default Card;
