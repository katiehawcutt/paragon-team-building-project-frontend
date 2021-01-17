import { useEffect, useState } from 'react'
import { USER_POOL_ID } from '../constants/awsCognito'
import * as AWS from 'aws-sdk'
import { USERS_BUCKET_NAME } from '../constants/awsS3'

const region = 'eu-west-1'
const identityPoolId = 'eu-west-1:9a2850ea-625e-433b-b14e-990895f2cc3a'
AWS.config.region = region // Region

export default function useAwsUserPool({ user, setUser }) {
    const [users, setUsers] = useState([])
    const idToken = user?.cognitoUserPool.id_token

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
    }, [idToken, user])

    const updateUserAttributes = async ({
        userSub,
        accessToken,
        name,
        bio,
        imageFile,
    }) => {
        if (!accessToken) {
            return console.warn(
                'updateUserAttributes was called without access token'
            )
        }

        /**
         * Initialise credentials.
         */
        await AWS.config.credentials.getPromise()

        const cognitoProvider = new AWS.CognitoIdentityServiceProvider({
            region,
            apiVersion: '2016-04-18',
        })

        let upload
        if (imageFile) {
            /**
             * Prepare S3 key.
             */
            const fileExtension =
                imageFile.name.match(/(?<fileExtension>\.[^.]+)$/)?.groups
                    ?.fileExtension ?? ''

            const key = `${userSub}-${Date.now()}${fileExtension}`

            /**
             * Upload the image.
             *
             * See: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
             */
            upload = await new AWS.S3.ManagedUpload({
                params: {
                    Bucket: USERS_BUCKET_NAME,
                    Key: key,
                    Body: imageFile,
                },
            }).promise()
        }

        /**
         * Update the user.
         */
        try {
            await cognitoProvider
                .updateUserAttributes({
                    AccessToken: accessToken,
                    UserAttributes: [
                        { Name: 'name', Value: name },
                        { Name: 'profile', Value: bio },
                        { Name: 'picture', Value: upload?.Location },
                    ].filter((attr) => undefined !== attr.Value),
                })
                .promise()

            const { UserAttributes } = await cognitoProvider
                .getUser({
                    AccessToken: accessToken,
                })
                .promise()

            const updatedAttributes = UserAttributes.reduce(
                (acc, { Name, Value }) => {
                    return {
                        ...acc,
                        [Name]: Value,
                    }
                },
                {}
            )

            setUser((prev) => {
                return {
                    ...prev,
                    cognitoUserInfo: {
                        ...(prev.cognitoUserInfo ?? {}),
                        ...updatedAttributes,
                    },
                }
            })
        } catch (e) {
            return console.error(e)
        }
    }

    return {
        /**
         * View users
         */
        users,
        /**
         * Update user
         */
        updateUserAttributes,
    }
}
