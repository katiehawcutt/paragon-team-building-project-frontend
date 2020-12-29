import React from 'react'
import ReactDOM from 'react-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './CountDownTimer.module.css'

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className={styles.timer}>It was...</div>
    }

    return (
        <div className={styles.timer}>
            <div className={styles.text}>Remaining</div>
            <div className={styles.value}>{remainingTime}</div>
            <div className={styles.text}>seconds</div>
        </div>
    )
}

function App({ roundNumber, secondsLeft }) {
    return (
        <div className={styles.App}>
            <div className={styles.timer_wrapper}>
                <p>Round # {roundNumber}</p>
                <p>Seconds left # {secondsLeft}</p>

                {/* <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={[['#6D44D9', 0.33], ['#6D44D9', 0.33], ['#6D44D9']]}
                    onComplete={() => [true, 10000]}
                >
                    {renderTime}
                </CountdownCircleTimer> */}
            </div>
        </div>
    )
}

export default App
