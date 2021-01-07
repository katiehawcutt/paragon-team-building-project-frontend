import React from 'react'
import styles from './Cohort.module.css'
import FlipCard from '../../components/FlipCard/FlipCard'

function Cohort() {
    return (
        <div className={styles.pageContainer}>
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

export default Cohort
