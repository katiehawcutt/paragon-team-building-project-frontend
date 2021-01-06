import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <button className={styles.xbutton}>X</button>
        </header>
    )
}

export default Header
