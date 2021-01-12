import React from 'react'
import Header from '../../components/Header'

import Round from '../../components/Round'
import Title from '../../components/Title'
import Leaderboard from '../../components/Leaderboard'
import styles from './WhichFactReveal.module.css'

export default function WhichFactReveal({
    displayName,
    roundNumber,
    fact,
    leaderboard,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text={`${displayName}'s true fact is...`} />
                <div className={styles.fact}>{fact}</div>
                <Leaderboard leaderboard={leaderboard} />
            </main>
        </>
    )
}

//change line 19 for name's ending in 's'
