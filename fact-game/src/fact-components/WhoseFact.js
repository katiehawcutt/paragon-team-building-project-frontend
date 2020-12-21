import React from 'react'
import './WhoseFact.css'
import Websocket from 'react-websocket'

function WhoseFact() {
    return (
        <div className="whose-fact-container">
            <h1>Whose Fact?</h1>
            <input type="text" className="factInput" />
        </div>
    )
}

export default WhoseFact
