import React from 'react'

import Header from '../../components/Header'
import Round from '../../components/Round'
import Title from '../../components/Title'
import Leaderboard from '../../components/Leaderboard'
import styles from './WhoseFactReveal.module.css'

export default function WhoseFactReveal({
    roundNumber,
    displayName,
    leaderboard,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text="The facts belong to..." />
                <div className={styles.nameContainer}>{displayName}</div>
                <Leaderboard leaderboard={leaderboard} />
            </main>
        </>
    )
}
