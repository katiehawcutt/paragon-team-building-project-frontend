import React from 'react'
import ProfileSettings from '../ProfileSettings'
import styles from './Menu.module.css'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

function Menu({ user }) {
    const {
        getUrlForAwsCognitoLogout,
        getUrlForAwsCognitoLogin,
    } = useAwsCognitoHostedUi()
    const imageSource = user?.cognitoUserInfo.picture || './Images/userIcon.png'

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
                {!user && (
                    <a
                        className={styles.logoutBtn}
                        href={getUrlForAwsCognitoLogin()}
                    >
                        log in
                    </a>
                )}
                {user && <ProfileSettings />}

                {user && (
                    <a
                        className={styles.logoutBtn}
                        href={getUrlForAwsCognitoLogout()}
                    >
                        log out
                    </a>
                )}
            </div>
        </div>
    )
}

export default Menu
