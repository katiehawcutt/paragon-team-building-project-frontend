import React from 'react'
import styles from './Menu.module.css'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

function Menu({ image }) {
    const { getUrlForAwsCognitoLogout } = useAwsCognitoHostedUi()

    return (
        <div className={styles.dropdown}>
            <button className={styles.userButton}>
                <img src={image} className={styles.userPhoto} alt="user" />
            </button>
            <div className={styles.dropdownContent}>
                <div>profile settings</div>
                <a
                    className={styles.logoutBtn}
                    href={getUrlForAwsCognitoLogout()}
                >
                    log out
                </a>
            </div>
        </div>
    )
}

export default Menu
