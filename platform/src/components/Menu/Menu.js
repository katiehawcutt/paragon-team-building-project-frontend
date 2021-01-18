import React from 'react'
import ProfileSettings from '../ProfileSettings'
import styles from './Menu.module.css'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

function Menu({ user }) {
    const { getUrlForAwsCognitoLogout } = useAwsCognitoHostedUi()
    const imageSource = user?.cognitoUserInfo.picture

    return (
        <div className={styles.dropdown}>
            <button className={styles.userButton}>
                {imageSource && (
                    <div
                        className={styles.userPhoto}
                        style={{
                            backgroundImage: `url(${imageSource})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                        }}
                    ></div>
                )}
            </button>
            <div className={styles.dropdownContent}>
                <ProfileSettings />

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
