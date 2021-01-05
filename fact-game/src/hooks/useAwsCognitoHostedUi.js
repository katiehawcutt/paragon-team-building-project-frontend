'use strict'

import React, { useEffect, useState } from 'react'

/**
 * Set up in AWS Cognito.
 */
const APP_CLIENT_ID = '4717ed4sr9omajvh9kicrc3mbr'
const USER_POOL_ID = 'eu-west-1_Dbanccf5c'

/**
 * Domain configured in AWS Cognito.
 */
const COGNITO_DOMAIN = 'https://paragon-rtb.auth.eu-west-1.amazoncognito.com'

/**
 * Interact with these endpoints.
 */
const endpoints = Object.freeze({
    AUTHORISATION_ENDPOINT: `${COGNITO_DOMAIN}/oauth2/authorize`,
    TOKEN_ENDPOINT: `${COGNITO_DOMAIN}/oauth2/token`,
    LOGOUT_ENDPOINT: `${COGNITO_DOMAIN}/logout`,
})

/**
 * Should return the URL at which user needs to sign in.
 */
const getUrlForAwsCognitoLogin = () => {
    const queryParams = new URLSearchParams([
        ['response_type', 'code'],
        ['scope', 'aws.cognito.signin.user.admin email openid phone profile'],
        ['client_id', APP_CLIENT_ID],
        ['redirect_uri', urls.CALLBACK_URL],
    ])
    return `${endpoints.AUTHORISATION_ENDPOINT}/${queryParams}`
}

/**
 * Should return the URL at which user will be logged out.
 */
const getUrlForAwsCognitoLogout = () => {
    const queryParams = new URLSearchParams([
        ['client_id', '4717ed4sr9omajvh9kicrc3mbr'],
        ['logout_uri', 'http://localhost:3000/after-logout'],
    ])
    return `${endpoints.LOGOUT_ENDPOINT}?${queryParams}`
}

/**
 * These URLs need to match what we've configured in AWS Cognito.
 */
const urls = Object.freeze({
    CALLBACK_URL: 'http://localhost:3000/login',
    SIGN_OUT_URL: 'http://localhost:3000/after-logout',
})

/**
 * Should return an object that contains a `fetchToken` method and a `cancel` cleanup function.
 */
const createRequestForToken = (code) => {
    const body = new URLSearchParams([
        ['grant_type', 'authorization_code'],
        ['scope', 'aws.cognito.signin.user.admin email openid phone profile'],
        ['client_id', APP_CLIENT_ID],
        ['redirect_uri', urls.CALLBACK_URL],
        ['code', code],
    ]).toString()

    const controller = new AbortController()

    /**
     * Should return a promise that resolves to the token payload
     * from AWS Cognito.
     */
    const fetchToken = async () => {
        try {
            const response = await fetch(endpoints.TOKEN_ENDPOINT, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                signal: controller.signal,
                body,
            })
            return await response.json()
        } catch (err) {
            if ('AbortError' !== err.name) {
                throw err
            }
        }
    }

    const cancelFetchToken = () => controller.abort()

    return { fetchToken, cancelFetchToken }
}

/**
 * Will redirect the user away from our app (to a different website).
 */
const redirectToAwsCognitoLogin = () => {
    const logInUrl = getUrlForAwsCognitoLogin()
    window.location.replace(logInUrl)
}

export function useAwsCognitoHostedUi() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)

    return {
        getUrlForAwsCognitoLogin,
        redirectToAwsCognitoLogin,
        userNeedsToBeRedirected: queryParams.has('code'),
        tokenCanBeRequested: !queryParams.has('code'),
        createRequestForToken,
        getUrlForAwsCognitoLogout,
    }
}
