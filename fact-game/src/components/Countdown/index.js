import React from 'react'
import styles from './Countdown.module.css'

function Countdown({ secondsLeft }) {
    return (
        <div className={styles.countdown} data-testid={'countdown'}>
            {secondsLeft}
        </div>
    )
}

export default Countdown
