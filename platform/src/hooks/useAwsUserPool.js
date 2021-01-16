import { useEffect, useState } from 'react'
import { USER_POOL_ID } from '../constants/awsCognito'
import * as AWS from 'aws-sdk'

const region = 'eu-west-1'
const identityPoolId = 'eu-west-1:9a2850ea-625e-433b-b14e-990895f2cc3a'
AWS.config.region = region // Region

// const idToken = user.cognitoUserPool.id_token

export default function useAwsUserPool({ idToken }) {
    const [users, setUsers] = useState([])

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId,
        // See: https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-integrating-user-pools-with-identity-pools.html
        // See: https://stackoverflow.com/a/51143970
        Logins: {
            [`cognito-idp.${region}.amazonaws.com/${USER_POOL_ID}`]: idToken,
        },
    })

    /**
     * Set users
     */
    useEffect(() => {
        if (!idToken) {
            return
        }

        AWS.config.credentials
            .getPromise()
            .then(() => {
                const cognitoProvider = new AWS.CognitoIdentityServiceProvider({
                    region,
                    apiVersion: '2016-04-18',
                })
                return cognitoProvider
                    .listUsers({
                        UserPoolId: USER_POOL_ID,
                        Limit: 60,
                    })
                    .promise()
            })
            .then((response) => {
                const isParagon = (user) => {
                    return user.Attributes.some((attr) => {
                        return (
                            'name' === attr.Name &&
                            /(Katie|Khang|Natalie|Bradley|Arshi)/.test(
                                attr.Value
                            )
                        )
                    })
                }
                setUsers(
                    response.Users.reduce((acc, user) => {
                        return isParagon(user) ? [user, ...acc] : [...acc, user]
                    }, [])
                )
            })
            .catch(console.error)
    }, [idToken])

    const updateUser = ({ accessToken, name, email, bio }) => {
        if (!accessToken) {
            return console.warn('updateUser was called without access token')
        }

        return console.log('Yes, update user was called with', {
            accessToken,
            name,
            email,
            bio,
        })

        AWS.config.credentials
            .getPromise()
            .then(() => {
                const cognitoProvider = new AWS.CognitoIdentityServiceProvider({
                    region,
                    apiVersion: '2016-04-18',
                })
                return cognitoProvider
                    .updateUserAttributes({
                        AccessToken: accessToken,
                        UserAttributes: [
                            { Name: 'name', Value: name },
                            { Name: 'email', Value: email },
                            { Name: 'profile', Value: bio },
                        ].filter((attr) => undefined !== attr.Value),
                    })
                    .promise()
            })
            .then((response) => {
                console.log('updateUser response', response)
                return response
            })
            .catch(console.error)
    }

    return {
        /**
         * View users
         */
        users,
        /**
         * Update user
         */
        updateUser,
    }
}
