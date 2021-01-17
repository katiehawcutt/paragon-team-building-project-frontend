import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './GameStarting.module.css'

import useSound from 'use-sound'
import alert from '../../sounds/zenping.mp3'

import Header from '../../components/Header'
import Title from '../../components/Title'

function GameStarting() {
    const [volume] = useState(0.5)
    const [pingAlert, { stop }] = useSound(alert, { volume })

    useEffect(() => {
        const timeoutId = setTimeout(pingAlert, 100)
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
                    className={styles.playImage}
                    src="./Images/playButton.png"
                    alt="play icon"
                />
            </div>
        </>
    )
}

export default GameStarting
