import React from 'react'
import cn from 'classnames'
import styles from './WhichFact.module.css'

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

    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text={`Which is ${displayName}'s fake fact?`} />
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
