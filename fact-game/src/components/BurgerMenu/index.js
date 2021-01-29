import React from 'react'
import styles from './BurgerMenu.module.css'
import cn from 'classnames'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

function BurgerMenu({ className = '' }) {
    const { getUrlForAwsCognitoLogout } = useAwsCognitoHostedUi()
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
                <a
                    className={styles.platformLink}
                    href="https://paragon-team-building.netlify.app/home"
                >
                    team-building platform
                </a>
                <a
                    className={styles.logoutLink}
                    href={getUrlForAwsCognitoLogout()}
                >
                    logout
                </a>
            </div>
        </div>
    )
}

export default BurgerMenu
