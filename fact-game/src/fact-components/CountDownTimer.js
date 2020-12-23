import React from 'react'
import ReactDOM from 'react-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import './CountDownTimer.css'

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>
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
                    duration={60}
                    colors={[['#6D44D9', 0.33], ['#D99444', 0.33], ['#A30000']]}
                    onComplete={() => [true, 1000]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
        </div>
    )
}

export default App
