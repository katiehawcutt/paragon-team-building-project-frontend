import React, { useState } from 'react'
import './CreateNewGame.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    createGameButton: {
        margin: '10px',
        backgroundColor: '#6D44D9',
        paddingTop: '10px',
        paddingBottom: '10px',
        fontFamily: 'Questrial',
    },
    gameNameForm: {
        margin: '20px',
    },
    numberOfRoundsForm: {
        margin: '20px',
    },
})

/*  Need information from input stored, 
    On button click send info to server/database */

// To do >>>>> Need to post pageData to server.

function CreateNewGame() {
    const [gameName, setGameName] = useState('')
    const [numberOfRounds, setNumberOfRounds] = useState(1)
    const [pageData, setPageData] = useState({})
    const classes = useStyles()

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
            <div>
                <form
                    className={classes.gameNameForm}
                    noValidate
                    autoComplete="off"
                    onChange={(e) => setGameName(e.target.value)}
                    value={gameName}
                >
                    <TextField
                        id="filled-basic"
                        label="Game name..."
                        variant="filled"
                    />
                </form>
            </div>
            <div>
                <form
                    className={classes.numberOfRoundsForm}
                    noValidate
                    autoComplete="off"
                    onChange={(e) => setGameName(e.target.value)}
                    value={numberOfRounds}
                >
                    <TextField
                        id="filled-basic"
                        label="Number of rounds..."
                        variant="filled"
                    />
                </form>
            </div>
            <div>
                <Button
                    className={classes.createGameButton}
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick({ gameName, numberOfRounds })}
                >
                    Create Game
                </Button>
            </div>
        </div>
    )
}

export default CreateNewGame
