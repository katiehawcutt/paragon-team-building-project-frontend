import React from 'react'
import styles from './WhoseFact.module.css'
import Header from '../../components/Header/Header'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import Countdown from '../../components/Countdown/Countdown'
import DisplayFact from '../../components/DisplayFact/DisplayFact'

import { useUserContext } from '../../contexts/User'

export default function WhoseFact({
    roundNumber,
    facts,
    participants,
    secondsLeft,
    handleAnswer,
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
                <Title text="Whose Facts?" />

                <Countdown secondsLeft={secondsLeft} />
                <div className={styles.factContainer}>
                    <DisplayFact facts={facts} />
                </div>
                <div className={styles.buttonContainer}>
                    {participants.map((participant) => {
                        return (
                            <button
                                className={
                                    currentChoiceId === participant.choiceId
                                        ? styles.selectedButton
                                        : styles.nameButton
                                }
                                key={participant.choiceId}
                                onClick={() =>
                                    handleAnswer({
                                        playerId,
                                        choice: participant.choiceId,
                                    })
                                }
                            >
                                {participant.text}
                            </button>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
