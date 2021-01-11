import React from 'react'
import styles from './Header.module.css'

function Header() {
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
