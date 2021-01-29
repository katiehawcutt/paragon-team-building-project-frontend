import React, { useState, useEffect } from 'react'
import styles from './WhichFactReveal.module.css'

import useSound from 'use-sound'
import revelation from '../../sounds/revelation.mp3'

import Header from '../../components/Header'
import Round from '../../components/Round'
import Title from '../../components/Title'
import Leaderboard from '../../components/Leaderboard'

export default function WhichFactReveal({
    displayName,
    roundNumber,
    fact,
    leaderboard,
}) {
    const [volume] = useState(0.5)
    const [revelationSound, { stop }] = useSound(revelation, { volume })

    useEffect(() => {
        const timeoutId = setTimeout(revelationSound, 200)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [revelationSound, stop])

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
