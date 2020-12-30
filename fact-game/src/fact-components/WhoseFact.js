import React from 'react'
import Websocket from 'react-websocket'
import styles from './WhoseFact.module.css'

function WhoseFact({
    roundNumber,
    facts,
    participants,
    handleClick,
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
                {participants.map((name) => {
                    return (
                        <button
                            className={styles.nameButton}
                            key={name}
                            handleClick={() =>
                                handleClick({
                                    choice: name,
                                })
                            }
                            //toggle background color green for selected button
                        >
                            {name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default WhoseFact
