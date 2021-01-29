import React from 'react'
import styles from './Header.module.css'
import BurgerMenu from '../BurgerMenu'

function Header() {
    return (
        <header className={styles.header} data-testid={'header'}>
            <BurgerMenu className={styles.burgerMenu} />
        </header>
    )
}

export default Header
