import React, { useState } from 'react'
import './CreateNewGame.css'

/*  Need information from input stored, 
    On button click send info to server/database */

// To do >>>>> Need to post pageData to server.

function CreateNewGame() {
    const [gameName, setGameName] = useState('')
    const [numberOfRounds, setNumberOfRounds] = useState(1)
    const [pageData, setPageData] = useState({})

    function handleClick() {
        console.log(gameName)
        console.log(numberOfRounds)
        setPageData([gameName, numberOfRounds])
    }
    console.log({ gameName })
    console.log({ numberOfRounds })
    console.log({ pageData })
    return (
        <div className="create-game-container">
            <h1>Create New Game</h1>
            <input
                onChange={(e) => setGameName(e.target.value)}
                type="text"
                value={gameName}
                className="gameName"
                placeholder="Game name..."
            />
            <input
                onChange={(e) => setNumberOfRounds(e.target.value)}
                type="text"
                value={numberOfRounds}
                className="roundNumber"
                placeholder="Number of rounds..."
            />

            <button
                className="createGame"
                onClick={() => handleClick({ gameName, numberOfRounds })}
            >
                Create Game
            </button>
        </div>
    )
}

export default CreateNewGame
