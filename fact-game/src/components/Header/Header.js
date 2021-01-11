import React from 'react'
import styles from './Header.module.css'

import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    return (
        <header className={styles.header} data-testid={'header'}>
            <button
                className={styles.xbutton}
                data-testid={'headerXButton'}
                onClick={() => {
                    location.replace('https://www.google.com')
                }}
            >
                X
            </button>
        </header>
    )
}

export default Header
