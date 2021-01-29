import React, { useEffect } from 'react'

import styles from './HandleLogout.module.css'

import LoginButton from '../LoginButton'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'
import { useUserContext } from '../../contexts/User'

export const HandleLogout = () => {
    const { user, setUser } = useUserContext()
    const { redirectToAwsCognitoLogout } = useAwsCognitoHostedUi()
    useEffect(() => {
        if (user) {
            setUser(null)
            redirectToAwsCognitoLogout()
        }
    }, [redirectToAwsCognitoLogout, user, setUser])

    if (user) {
        return (
            <>
                <div className={styles.pageContainer}>
                    <p className={styles.loggingOutMessage}>
                        Just logging you out...
                    </p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className={styles.pageContainer}>
                <p className={styles.loggingOutMessage}>
                    You've been logged out. See you soon!
                </p>
                <img
                    src="./Images/wavingTeam.png"
                    alt="team wavng goodbye"
                    className={styles.wavingPicture}
                />
                <LoginButton text="Login" />
            </div>
        </>
    )
}
