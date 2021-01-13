import React, { useState, useEffect } from 'react'

import useSound from 'use-sound'
import revelation from '../../sounds/revelation.mp3'

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
                <Title text="The facts belong to..." />
                <div className={styles.nameContainer}>{displayName}</div>
                <Leaderboard leaderboard={leaderboard} />
            </main>
        </>
    )
}
