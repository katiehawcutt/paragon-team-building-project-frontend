import { useLocation } from 'react-router-dom'
import { endpoints, callbackUrls, APP_CLIENT_ID } from '../constants/awsCognito'

/**
 * Should return the URL at which user needs to sign in.
 */
const getUrlForAwsCognitoLogin = () => {
    const queryParams = new URLSearchParams([
        ['response_type', 'code'],
        ['scope', 'aws.cognito.signin.user.admin email openid phone profile'],
        ['client_id', APP_CLIENT_ID],
        ['redirect_uri', callbackUrls.AUTH_URL],
    ])
    return `${endpoints.AUTHORISATION_ENDPOINT}?${queryParams}`
}

/**
 * Should return the URL at which user will be logged out.
 */
const getUrlForAwsCognitoLogout = () => {
    const queryParams = new URLSearchParams([
        ['client_id', '4717ed4sr9omajvh9kicrc3mbr'],
        ['logout_uri', callbackUrls.LOGOUT_URL],
    ])
    return `${endpoints.LOGOUT_ENDPOINT}?${queryParams}`
}

/**
 * Should return an object that contains a `fetchToken` method and a `cancelFetchToken` cleanup function.
 */
const createRequestForToken = (code) => {
    const body = new URLSearchParams([
        ['grant_type', 'authorization_code'],
        ['scope', 'aws.cognito.signin.user.admin email openid phone profile'],
        ['client_id', APP_CLIENT_ID],
        ['redirect_uri', callbackUrls.AUTH_URL],
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
 * Should return an object that contains a `fetchUserInfo` method and a `cancelFetch` cleanup function.
 */
const createRequestForUserInfo = (accessToken) => {
    const controller = new AbortController()
    const fetchUserInfo = async () => {
        try {
            const response = await fetch(endpoints.USER_INFO_ENDPOINT, {
                headers: { Authorization: `Bearer ${accessToken}` },
                signal: controller.signal,
            })
            return await response.json()
        } catch (err) {
            if ('AbortError' !== err.name) {
                throw err
            }
        }
    }
    const cancelFetch = () => controller.abort()
    return { fetchUserInfo, cancelFetch }
}

/**
 * Will redirect the user away from our app (to a different website).
 */
const redirectToAwsCognitoLogin = () => {
    const loginUrl = getUrlForAwsCognitoLogin()
    window.location.replace(loginUrl)
}

/**
 * Will redirect the user away from our app (to a different website).
 */
const redirectToAwsCognitoLogout = () => {
    const logoutUrl = getUrlForAwsCognitoLogout()
    window.location.replace(logoutUrl)
}

export function useAwsCognitoHostedUi() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const authorisationCode = queryParams.get('code')

    return {
        getUrlForAwsCognitoLogin,
        redirectToAwsCognitoLogin,
        userNeedsToBeRedirected: !queryParams.has('code'),
        tokenCanBeRequested: queryParams.has('code'),
        authorisationCode,
        createRequestForToken,
        createRequestForUserInfo,
        getUrlForAwsCognitoLogout,
        redirectToAwsCognitoLogout,
    }
}
