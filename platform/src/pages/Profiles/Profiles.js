import React from 'react'
import styles from './Profiles.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'
import Title from '../../components/Title/Title'

function Profiles() {
    return (
        <div className={styles.pageContainer}>
            <Title className={styles.h1} text={'Meet your cohort...'} />
            <div>
                {' '}
                <img
                    className={styles.pageImage}
                    alt="cohort"
                    src="./Images/team_build.png"
                />
            </div>

            <div className={styles.flipCardContainer}>
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
            </div>
        </div>
    )
}

export default Profiles
