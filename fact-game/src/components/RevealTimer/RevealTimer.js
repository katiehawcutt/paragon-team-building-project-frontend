import React from 'react'
import Countdown from '../Countdown/Countdown'
import Round from '../Round/Round'
import Title from '../Title/Title'
import styles from './RevealTimer.module.css'

export default function RevealTimer({
    title,
    roundNumber,
    secondsLeft,
    // facts,
}) {
    return (
        <>
            <main className={styles.pageContainer}>
                <div className={styles.round_countainer}>
                    <Round roundNumber={roundNumber} />
                </div>
                <Title text={title} />
                <div className={styles.countdown_countainer}>
                    <Countdown secondsLeft={secondsLeft} />
                </div>
            </main>
        </>
    )
}

/*ToDo - 
1. Change hardcoded round
2. Change title name 
3. Change hardcoded countdown
4. Change hardcoded name */
