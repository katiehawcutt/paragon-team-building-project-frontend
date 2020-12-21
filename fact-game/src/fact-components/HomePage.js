import React, { useState, useEffect } from 'react'
import './HomePage.css'

/* new game button - Takes to create new game page
    Join existing game button - when clicked populate games.
 */

function HomePage() {
    const [existingGame, setExistingGame] = useState([])

    useEffect(() => {
        async function getGameData(handleClick) {
            let res = await fetch('http://localhost:3000') //need to know url from backend.
            let data = await res.json()
            setExistingGame(data) //<<Need info from backend
        }
        getGameData()
    }, [handleClick])

    function handleClick() {
        console.log('handleclick fired')
        console.log(existingGame)
        existingGame.map((item) => {
            console.log(item)
            return <button key={item.id}>{item.name}</button>
            //Button not be rendered on the page.
            //item.id and item.name info needed from backend
        })
    }

    return (
        <div className="hompage-container">
            <h1 className="title-container">Fact Game</h1>
            <button className="createNewGame">Create New Game</button>
            <button className="joinExistingGame" onClick={handleClick}>
                Join Existing Game
            </button>
        </div>
    )
}

export default HomePage
