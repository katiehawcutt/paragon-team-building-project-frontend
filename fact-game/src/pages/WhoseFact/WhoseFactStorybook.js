import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './WhoseFact.module.css'

import useSound from 'use-sound'
import ticktock from '../../sounds/ticktock.mp3'
import ping from '../../sounds/selectAnswer.mp3'

import Header from '../../components/Header'
import Round from '../../components/Round'
import Title from '../../components/Title'
import Countdown from '../../components/Countdown'
import DisplayFact from '../../components/DisplayFact'

// import { useUserContext } from '../../contexts/User'

export default function WhoseFact({
    roundNumber,
    facts,
    participants,
    secondsLeft,
}) {
    // const {
    //     user: { playerId },
    // } = useUserContext()

    const [volume, setVolume] = useState(0.1)

    const [ButtonSound] = useSound(ping, { volume })
    const [tickingSound, { stop }] = useSound(ticktock, { volume })

    useEffect(() => {
        setTimeout(tickingSound, 5000)
        return () => {
            stop()
        }
    }, [tickingSound])

    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text="Whose Facts?" />

                <Countdown secondsLeft={secondsLeft} />
                <div className={styles.factContainer}>
                    <DisplayFact facts={facts} />
                </div>
                <div className={styles.buttonContainer}>
                    {participants.map((participant) => {
                        return (
                            <button
                                className={styles.nameButton}
                                // key={participant.choiceId}
                                // onClick={() =>
                                //     handleAnswer({
                                //         playerId,
                                //         choice: participant.choiceId,
                                //     })
                                // }
                                onClick={ButtonSound}
                            >
                                {participant}
                            </button>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
