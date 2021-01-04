import React from 'react'
import CountDownTimer3 from '../_CountDownTimer3/CountDownTimer3'
import styles from './FalseFactReveal.module.css'

export default function FalseFactReveal({
    roundNumber,
    displayName,
    fact,
    lie,
}) {
    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.falseFact_title}>
                {displayName}'s fake fact is...
            </h2>
            {/* <CountDownTimer3 /> */}
            <div className={styles.name_container2}>
                <div className={styles.factContainer}>
                    <div className={styles.lie}>{lie}</div>
                </div>
            </div>
        </div>
    )
}
