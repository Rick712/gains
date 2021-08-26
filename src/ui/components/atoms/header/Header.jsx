import React from 'react';

import { paths } from '../../../paths';

import './header.css';

function Header() {
    return (
        <div className="header">
            <a href={paths.home}>Terug naar home</a>
        </div>
    );
}

export default Header;
