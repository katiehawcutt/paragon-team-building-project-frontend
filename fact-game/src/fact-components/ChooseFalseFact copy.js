import React from 'react'
import './ChooseFalseFact.css'
import CountDownTimer2 from './CountDownTimer2'

function ChooseFalseFact() {
    return (
        <div className="chooseFalseFact-container">
            <CountDownTimer2 />
            <h2>Which Fact is False</h2>
            <div className="facts-container">
                <div className="fact1-container">
                    <div className="fact1-info">Fact 1 info goes here.</div>
                    <button className="fact1-btn-container">Select #1</button>
                </div>
                <div className="fact2-container">
                    <div className="fact2-info">Fact2 info goes here.</div>
                    <button className="fact2-btn-container">Select #1</button>
                </div>
            </div>
        </div>
    )
}

export default ChooseFalseFact
