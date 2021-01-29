import React from 'react'
import styles from './Header.module.css'
import BurgerMenu from '../BurgerMenu'

function Header() {
    return (
        <header className={styles.header} data-testid={'header'}>
            {/* <a
                className={styles.x}
                data-testid={'headerXButton'}
                href="https://paragon-team-building.netlify.app"
            >
                X
            </a> */}
            <BurgerMenu className={styles.burgerMenu} />
        </header>
    )
}

export default Header
