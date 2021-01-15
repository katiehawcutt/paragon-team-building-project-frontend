import React from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'
import Title from '../../components/Title/Title'

const people = [
    {
        personName: 'Katie Louise Hawcutt',
        imageSrc: './Images/kh.png',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Natalie Posteraro',
        imageSrc: './Images/np.jpg',
        bio: `I'm Natalie and my career has predominantly been in the beauty industry where I was delivering skincare & makeup solutions to my customers.
        Now I use that passion to create solutions with technology.`,
    },
    {
        personName: 'Khang Khuat',
        imageSrc: './Images/kk.png',
        bio: `I usually spend most of my time socialising with my family and friends, from board games to outdoor activities. Well I guess not really  socialising outdoor anymore`,
    },
    {
        personName: 'Bradley Arthur Bart Smith',
        imageSrc: './Images/bs.jpg',
        bio: `Nothing more enjoyable than a sunset surf with friends. Other hobbies include kayaking, paddle-boarding and water-skiing, anything on the water basically!.`,
    },
    {
        personName: 'Arshi Sheikh',
        imageSrc: './Images/as.jpg',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
]
function Profiles() {
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
                {people.map((person, i) => {
                    return (
                        <FlipCard
                            key={i}
                            personName={person.personName}
                            imageSrc={person.imageSrc}
                            bio={person.bio}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Profiles
