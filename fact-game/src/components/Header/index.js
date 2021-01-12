import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header} data-testid={'header'}>
            <a
                className={styles.x}
                data-testid={'headerXButton'}
                href="https://paragon-team-building.netlify.app"
            >
                X
            </a>
        </header>
    )
}

export default Header
