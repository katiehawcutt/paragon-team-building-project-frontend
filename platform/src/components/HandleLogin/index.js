import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import styles from './HandleLogin.module.css'

import { useUserContext } from '../../contexts/User'
import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

/**
 * AWS Cognito requires us to use the same callback URI for both scenarios.
 *  1. If code is not present amongst query parameters, handle redirect to authorisation endpoint (to begin the authorisation flow).
 *  2. If code is present amongst query parameters, make POST request for tokens.
 */
export const HandleLogin = () => {
    const [token, setToken] = useState(null)

    const {
        userNeedsToBeRedirected,
        tokenCanBeRequested,
        redirectToAwsCognitoLogin,
        createRequestForToken,
        createRequestForUserInfo,
        authorisationCode,
    } = useAwsCognitoHostedUi()

    const { user, setUser } = useUserContext()

    /**
     * Redirect the user if there's no code.
     */
    useEffect(() => {
        if (userNeedsToBeRedirected) {
            redirectToAwsCognitoLogin()
        }
    }, [userNeedsToBeRedirected, redirectToAwsCognitoLogin])

    /**
     * User has returned (from signing in over at AWS Cognito). There should be a `code`
     * query string parameter, which we need to exchange for a token.
     */
    useEffect(() => {
        if (token || !tokenCanBeRequested) {
            return
        }

        const { fetchToken, cancelFetchToken } = createRequestForToken(
            authorisationCode
        )

        fetchToken()
            .then((token) => {
                if (token.error) {
                    const errorMessage = `Failed to log in to AWS Cognito: ${token.error}`
                    throw new Error(errorMessage)
                }
                setToken(token)
            })
            .catch(console.error)

        /**
         * Clean up function for unmount/re-render.
         */
        return cancelFetchToken
    }, [tokenCanBeRequested, createRequestForToken, authorisationCode, token])

    /**
     * If we have token, request user's info.
     */
    useEffect(() => {
        if (!token) {
            return void setUser(null)
        }
        const { fetchUserInfo, cancelFetch } = createRequestForUserInfo(
            token.access_token
        )

        fetchUserInfo()
            .then((userInfo) => {
                setUser((prev) => ({
                    ...prev,
                    playerId: userInfo.sub,
                    displayName: userInfo.name,
                    cognitoUserPool: token,
                }))
            })
            .catch(console.error)

        /**
         * Clean up function for unmount/re-render.
         */
        return cancelFetch
    }, [token, createRequestForUserInfo, setUser])

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className={styles.pageContainer}>
                <p className={styles.loggingInMessage}>
                    Just getting you logged in...
                </p>
            </div>
        </>
    )
}
