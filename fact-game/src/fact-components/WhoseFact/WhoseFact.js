import React from 'react'
import styles from './WhoseFact.module.css'

export default function WhoseFact({
    roundNumber,
    facts,
    participants,
    leaderboard,
    secondsLeft,
    turnId,
    handleAnswer,
}) {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className={styles.roundLabel}>Round #{roundNumber}</div>
                <h1 className={styles.pageTitle}>Guess who!</h1>
                <div className={styles.countdown}>{secondsLeft}</div>
            </header>
            <div className={styles.factContainer}>
                {facts.map((fact, i) => {
                    return (
                        <div className={styles.facts} key={i}>
                            {fact}
                        </div>
                    )
                })}
            </div>
            <div className={styles.buttonContainer}>
                {participants.map((participant) => {
                    return (
                        <button
                            className={styles.nameButton}
                            key={participant.choiceId}
                            onClick={() =>
                                handleAnswer({
                                    choice: participant.choiceId,
                                })
                            }
                            //toggle background color green for selected button
                        >
                            {participant.text}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
