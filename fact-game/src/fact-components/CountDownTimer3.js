import React from 'react'
import ReactDOM from 'react-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import './CountDownTimer3.css'

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">It was...</div>
    }

    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying
                    duration={0}
                    colors={[['#6D44D9', 0.33], ['#6D44D9', 0.33], ['#6D44D9']]}
                    onComplete={() => [true, 10000]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
        </div>
    )
}

export default App
