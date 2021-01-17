import React from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'
import Title from '../../components/Title/Title'

import { useUserContext } from '../../contexts/User'
import useAwsUserPool from '../../hooks/useAwsUserPool'

// const people = [
//     {
//         personName: 'Katie Louise Hawcutt',
//         imageSrc: './Images/kh.png',
//         bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
//     },
//     {
//         personName: 'Natalie Posteraro',
//         imageSrc: './Images/np.jpg',
//         bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
//     },
//     {
//         personName: 'Khang Khuat',
//         imageSrc: './Images/kk.png',
//         bio: `I usually spend most of my time socialising with my family and friends, from board games to outdoor activities. Well I guess not really  socialising outdoor anymore`,
//     },
//     {
//         personName: 'Bradley Arthur Bart Smith',
//         imageSrc: './Images/bs.jpg',
//         bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
//     },
//     {
//         personName: 'Arshi Sheikh',
//         imageSrc: './Images/as.jpg',
//         bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
//     },
// ]

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
