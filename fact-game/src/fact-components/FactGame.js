import useFactsGame from '../hooks-folder/UseFactsGame'
import React from 'react'
import Homepage from './HomePage'
import CreateNewGame from './CreateNewGame'

function FactGame(children) {
    const game = useFactsGame()

    return (
        <div>
            <CreateNewGame handleClick={game.createNewGame} />
        </div>
    )
}

export default FactGame
