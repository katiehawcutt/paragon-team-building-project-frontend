import React from 'react'
import styles from './Countdown.module.css'

function Countdown({ secondsLeft }) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.countdown}>{secondsLeft}</div>
        </div>
    )
}

export default Countdown
