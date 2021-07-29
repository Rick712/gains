import React from 'react';

import styles from './link.css';

function Link({ children }) {
    return (
        <div>
            <a className={styles.link}>Dit is een link</a>
        </div>
    );
}

export default Link;
