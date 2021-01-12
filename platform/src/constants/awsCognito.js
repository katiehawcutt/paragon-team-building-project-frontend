/**
 * Set up in AWS Cognito.
 */
export const APP_CLIENT_ID = '7ciqhikgb2hne3lk3glen23c1'
export const USER_POOL_ID = 'eu-west-1_deTxl6vNk'

/**
 * Domain configured in AWS Cognito.
 */
export const COGNITO_DOMAIN = 'https://paragon.auth.eu-west-1.amazoncognito.com'

/**
 * Interact with these endpoints.
 */
export const endpoints = Object.freeze({
    AUTHORISATION_ENDPOINT: `${COGNITO_DOMAIN}/oauth2/authorize`,
    TOKEN_ENDPOINT: `${COGNITO_DOMAIN}/oauth2/token`,
    USER_INFO_ENDPOINT: `${COGNITO_DOMAIN}/oauth2/userInfo`,
    LOGOUT_ENDPOINT: `${COGNITO_DOMAIN}/logout`,
})

/**
 * These URLs need to match what we've configured in AWS Cognito.
 */
export const callbackUrls = Object.freeze({
    AUTH_URL: 'http://localhost:3000/login',
    // AUTH_URL: process.env.REACT_APP_AUTH_URL ?? 'http://localhost:3000/login',
    // LOGOUT_URL:
    //     process.env.REACT_APP_LOGOUT_URL ??
    //     'http://localhost:3000/after-logout',
    LOGOUT_URL: 'http://localhost:3000/after-logout',
})
