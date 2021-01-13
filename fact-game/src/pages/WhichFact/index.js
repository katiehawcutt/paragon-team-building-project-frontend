import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './WhichFact.module.css'

import useSound from 'use-sound'
import ticktock from '../../sounds/ticktock.mp3'

import Header from '../../components/Header'
import Round from '../../components/Round'
import Title from '../../components/Title'
import Countdown from '../../components/Countdown'
import FactButton from '../../components/FactButton'

import { useUserContext } from '../../contexts/User'

export default function WhichFact({
    roundNumber,
    displayName,
    facts,
    handleAnswer,
    secondsLeft,
    currentChoiceId,
}) {
    const {
        user: { playerId },
    } = useUserContext()

    const [volume] = useState(0.5)
    const [tickingSound, { stop }] = useSound(ticktock, { volume })

    useEffect(() => {
        if (secondsLeft === 10) {
            tickingSound()
        }
    }, [tickingSound, stop, secondsLeft])

    useEffect(() => {
        return () => {
            stop()
        }
    }, [stop])

    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text={`Which is ${displayName}'s true fact?`} />
                <Countdown secondsLeft={secondsLeft} />
                <div className={styles.factContainer}>
                    {facts.map((fact) => {
                        return (
                            <FactButton
                                key={fact.choiceId}
                                factText={fact.text}
                                selected={currentChoiceId === fact.choiceId}
                                handleClick={() => {
                                    handleAnswer({
                                        playerId,
                                        choice: fact.choiceId,
                                    })
                                }}
                            />
                        )
                    })}
                </div>
            </main>
        </>
    )
}
