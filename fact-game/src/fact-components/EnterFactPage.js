import React, { useState } from 'react'
import './EnterFactPage.css'

function EnterFactPage() {
    const [trueFact, setTrueFact] = useState('')
    const [falseFact, setFalseFact] = useState('')
    const [factData, setFactData] = useState({})

    //Need to send factData to the server.

    function handleClick() {
        setFactData([trueFact, falseFact])
        console.log({ trueFact })
        console.log({ falseFact })
        console.log({ factData })
    }

    return (
        <div className="enter-fact-container">
            <div className="title-container">True & False Fact</div>
            <div className="input-container">
                <input
                    className="trueFact"
                    onChange={(e) => setTrueFact(e.target.value)}
                    type="text"
                    value={trueFact}
                    className="trueFact"
                    placeholder="Enter your true fact here..."
                />
                <input
                    className="falseFact"
                    onChange={(e) => setFalseFact(e.target.value)}
                    type="text"
                    value={falseFact}
                    className="falseFact"
                    placeholder="Enter your false fact here..."
                />
            </div>
            <div className="button-container">
                <button
                    className="submitButton"
                    onClick={() => handleClick({ trueFact, falseFact })}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default EnterFactPage
