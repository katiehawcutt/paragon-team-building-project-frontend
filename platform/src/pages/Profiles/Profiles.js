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
        imageSrc: './Images/kh.png',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Khang Khuat',
        imageSrc: './Images/kh.png',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Bradley Arthur Bart Smith',
        imageSrc: './Images/kh.png',
        bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
    },
    {
        personName: 'Arshi Sheikh',
        imageSrc: './Images/kh.png',
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
