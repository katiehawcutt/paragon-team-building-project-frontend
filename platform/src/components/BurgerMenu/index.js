import React from 'react'
import styles from './BurgerMenu.module.css'
import cn from 'classnames'

import { NavLink as Link } from 'react-router-dom'

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
                <p className={styles.link}>
                    <Link to="/home" className={styles.navLink}>
                        home
                    </Link>
                </p>
                <p className={styles.link}>
                    <Link to="/teambuilding" className={styles.navLink}>
                        team building
                    </Link>
                </p>
                <p className={styles.link}>
                    <Link to="/profiles" className={styles.navLink}>
                        profiles
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default BurgerMenu
