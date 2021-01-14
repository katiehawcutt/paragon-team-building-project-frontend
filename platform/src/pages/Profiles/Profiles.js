import React, { useEffect, useState } from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'
import Title from '../../components/Title/Title'

import * as AWS from 'aws-sdk'
import { useUserContext } from '../../contexts/User'

export const people = [
    {
        personName: 'Katie Louise Hawcutt',
        imageSrc: './Images/kh.png',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Natalie Posteraro',
        imageSrc: './Images/np.jpg',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Khang Khuat',
        imageSrc: './Images/kk.png',
        bio: `I usually spend most of my time socialising with my family and friends, from board games to outdoor activities. Well I guess not really  socialising outdoor anymore`,
    },
    {
        personName: 'Bradley Arthur Bart Smith',
        imageSrc: './Images/bs.jpg',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Arshi Sheikh',
        imageSrc: './Images/as.jpg',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
]

function Profiles() {
    const { user } = useUserContext()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userPoolId = 'eu-west-1_deTxl6vNk'
        const region = 'eu-west-1'
        const idToken = user.cognitoUserPool.id_token

        AWS.config.region = 'eu-west-1' // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-1:9a2850ea-625e-433b-b14e-990895f2cc3a',
            // See: https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-integrating-user-pools-with-identity-pools.html
            // See: https://stackoverflow.com/a/51143970
            Logins: {
                [`cognito-idp.${region}.amazonaws.com/${userPoolId}`]: idToken,
            },
        })

        AWS.config.credentials
            .getPromise()
            .then(() => {
                const cognitoProvider = new AWS.CognitoIdentityServiceProvider({
                    region: 'eu-west-1',
                    apiVersion: '2016-04-18',
                })

                return cognitoProvider
                    .listUsers({
                        UserPoolId: userPoolId,
                        Limit: 60,
                    })
                    .promise()
            })
            .then((response) => {
                setUsers(response.Users)
            })
            .catch(console.error)
    }, [user])

    useEffect(() => {
        if (users) {
            console.log('users updated', users)
        }
    }, [users])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.titleImageContainer}>
                <Title text={'Meet your cohort...'} className={styles.title} />

                <img
                    className={styles.pageImage}
                    alt="cohort"
                    src="./Images/team_build.png"
                />
            </div>

            <div className={styles.flipCardContainer}>
                {users.map((user, i) => {
                    const name = user.Attributes.find(
                        (attr) => 'name' === attr.Name
                    )?.Value

                    const bio = user.Attributes.find(
                        (attr) => 'profile' === attr.Name
                    )?.Value

                    return (
                        <FlipCard
                            key={i}
                            personName={name}
                            // imageSrc={person.imageSrc}
                            bio={bio}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Profiles
