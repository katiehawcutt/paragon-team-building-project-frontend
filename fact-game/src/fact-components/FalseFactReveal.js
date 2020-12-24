import React from 'react'
import CountDownTimer2 from './CountDownTimer2'
import './FalseFactReveal.css'

function FalseFactReveal() {
    return (
        <div className="falseFact-container">
            <h2 className="falseFact-title">Whose Fact is false?</h2>
            <CountDownTimer2 />
            <div className="name-container2">
                <p className="whoseFact-name2">Name Goes Here</p>
                <div className="fact-info2">Fact 1 info goes here.</div>
            </div>
        </div>
    )
}

export default FalseFactReveal
