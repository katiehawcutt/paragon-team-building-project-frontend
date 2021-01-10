import React from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'
import Title from '../../components/Title/Title'

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
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Natalie Posteraro"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
                <FlipCard
                    personName="Katie Hawcutt"
                    imageSrc="./Images/kh.png"
                />
            </div>
        </div>
    )
}

export default Profiles
