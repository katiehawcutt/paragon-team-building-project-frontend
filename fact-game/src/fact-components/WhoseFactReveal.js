import React from 'react'
import CountDownTimer2 from './CountDownTimer2'
import './WhoseFactReveal.css'

function WhoseFactReveal() {
    return (
        <div className="whoseFact-container">
            <h2>Whose Fact was it?</h2>
            <CountDownTimer2 />
            <div className="name-container">
                <p className="whoseFact-name">Name Goes Here</p>
            </div>
        </div>
    )
}

export default WhoseFactReveal
