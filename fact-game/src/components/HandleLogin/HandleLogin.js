'use strict'

import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { useUserContext } from '../../contexts/User'
import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

/**
 * AWS Cognito requires us to use the same callback URI for both scenarios.
 *  1. If code is not present amongst query parameters, handle redirect to authorisation endpoint (to begin the authorisation flow).
 *  2. If code is present amongst query parameters, make POST request for tokens.
 */
export const HandleLogin = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const {
        userNeedsToBeRedirected,
        tokenCanBeRequested,
        redirectToAwsCognitoLogIn,
        createRequestForToken,
    } = useAwsCognitoHostedUi()

    const { setUser } = useUserContext()

    /**
     * Redirect the user if there's no code.
     */
    useEffect(() => {
        // const userNeedsToBeRedirected = !queryParams.has('code')
        if (userNeedsToBeRedirected) {
            redirectToAwsCognitoLogIn()
        }
    }, [])

    /**
     * User has returned (from signing in over at AWS Cognito). There should be a `code`
     * query string parameter, which we need to exchange for a token.
     */
    useEffect(() => {
        // const tokenCanBeRequested = queryParams.has('code')
        if (!tokenCanBeRequested) {
            return
        }
        const code = queryParams.get('code')
        const { fetchToken, cancelFetchToken } = createRequestForToken(code)

        fetchToken()
            .then((token) => {
                console.log('Token, is that you?', token)
            })
            .catch(console.error)

        /**
         * Clean up function for unmount/re-render.
         */
        return cancelFetchToken
    }, [])

    useEffect(() => {
        /**
         * Update the token
         */
    }, [])

    return <p>Just getting you logged in...</p>
}
