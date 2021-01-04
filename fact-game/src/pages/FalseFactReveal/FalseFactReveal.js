import React from 'react'
import Header from '../../components/Header/Header'
// import Countdown from '../../components/Countdown/Countdown'
import DisplayFact from '../../components/DisplayFact/DisplayFact'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './FalseFactReveal.module.css'

export default function FalseFactReveal({
    displayName,
    roundNumber,
    // secondsLeft,
    fakeFact,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <div className={styles.round_countainer}>
                    <Round roundNumber={roundNumber} />
                </div>
                <Title text={`${displayName}'s truthy is...`} />
                <div className={styles.displayFact_countainer}>
                    <DisplayFact facts={fakeFact} />
                </div>
            </main>
        </>
    )
}
