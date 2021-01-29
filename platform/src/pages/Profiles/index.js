import React from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard'
import Title from '../../components/Title'

import { useUserContext } from '../../contexts/User'
import useAwsUserPool from '../../hooks/useAwsUserPool'

function Profiles() {
    const { user } = useUserContext()
    const { users } = useAwsUserPool({ user })

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

                    const imageSrc = user.Attributes.find(
                        (attr) => 'picture' === attr.Name
                    )?.Value

                    return (
                        <FlipCard
                            key={i}
                            personName={name}
                            bio={bio}
                            imageSrc={imageSrc}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Profiles
