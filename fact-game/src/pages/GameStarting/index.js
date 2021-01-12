import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './GameStarting.module.css'

import useSound from 'use-sound'
import alert from '../../sounds/zenping.mp3'

import Header from '../../components/Header'
import Title from '../../components/Title'

function GameStarting() {
    const [pingAlert, { stop }] = useSound(alert)

    const timeoutId = useEffect(() => {
        setTimeout(pingAlert, 100)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [pingAlert, stop])

    return (
        <>
            <Header />
            <div className={cn(styles.pageContainer, 'animateIn')}>
                <Title text="The game is about to start..." />
                <img
                    className={styles.hourglassImage}
                    src="./Images/hourglass.png"
                    alt="spinning eggtimer"
                ></img>
            </div>
        </>
    )
}

export default GameStarting
