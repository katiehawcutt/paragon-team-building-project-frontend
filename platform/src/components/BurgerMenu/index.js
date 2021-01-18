import React from 'react'
import styles from './BurgerMenu.module.css'
import cn from 'classnames'

function BurgerMenu({ className = '' }) {
    return (
        <div className={cn(styles.dropdown, className)}>
            <button className={styles.menuButton}>
                <img
                    src="./Images/menu.svg"
                    alt="menu"
                    className={styles.menuImage}
                />
            </button>
            <div className={styles.dropdownContent}>
                <a className={styles.link}>home</a>
                <a className={styles.link}>team building</a>
                <a className={styles.link}>profiles</a>
            </div>
        </div>
    )
}

export default BurgerMenu
