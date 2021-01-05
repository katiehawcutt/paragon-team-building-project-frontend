import React from 'react'
import styles from './ChooseFalseFact.module.css'
import Header from '../../components/Header/Header'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import Countdown from '../../components/Countdown/Countdown'
import FactButton from '../../components/FactButton/FactButton'

import { useUserContext } from '../../contexts/User'

export default function ChooseFalseFact({
    roundNumber,
    displayName,
    facts: [firstFact, secondFact],
    handleAnswer,
    secondsLeft,
    currentChoiceId,
    // turnId,
}) {
    const {
        user: { playerId },
    } = useUserContext()
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text={`Which is ${displayName}'s fake fact?`} />
                <Countdown secondsLeft={secondsLeft} />
                <div className={styles.factContainer}>
                    <FactButton
                        factText={firstFact}
                        selected={currentChoiceId === firstFact ? true : false}
                        handleClick={() => {
                            handleAnswer({ playerId, choice: firstFact })
                        }}
                    />
                    <FactButton
                        factText={secondFact}
                        selected={currentChoiceId === secondFact ? true : false}
                        handleClick={() => {
                            handleAnswer({ playerId, choice: secondFact })
                        }}
                    />
                </div>
            </main>
        </>
    )
}
