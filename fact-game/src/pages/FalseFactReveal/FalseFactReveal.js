import React from 'react'
import cn from 'classnames'
import Header from '../../components/Header/Header'

// import Countdown from '../../components/Countdown/Countdown'
// import DisplayFact from '../../components/DisplayFact/DisplayFact'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './FalseFactReveal.module.css'

export default function FalseFactReveal({
    displayName,
    roundNumber,
    // secondsLeft,
    fakeFact,
}) {
    console.log(fakeFact)
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text={`${displayName}'s fake fact is...`} />
                <div className={styles.fakeFact}>{fakeFact[0]}</div>
            </main>
        </>
    )
}
