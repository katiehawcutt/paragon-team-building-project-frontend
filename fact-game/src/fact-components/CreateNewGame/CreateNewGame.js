import React, { useState } from 'react'
import './CreateNewGame.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import useWebSocket, { ReadyState } from 'react-use-websocket'

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

export default function CreateNewGame({ handleClick }) {
    const [gameName, setGameName] = useState('')
    const [trueFact, setTrueFact] = useState('I like cake')
    const [falseFact, setFalseFact] = useState('I do not like cake')
    const [numberOfRounds, setNumberOfRounds] = useState(1)
    const [pageData, setPageData] = useState({})
    const classes = useStyles()
    return (
        <div className="create-game-container">
            <h1>Create New Game</h1>
            {/* <div>
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
            </div> */}
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
                <form
                    className={classes.numberOfRoundsForm}
                    noValidate
                    autoComplete="off"
                    onChange={(e) => setGameName(e.target.value)}
                    value={trueFact}
                >
                    <TextField
                        id="filled-basic"
                        label="True fact..."
                        variant="filled"
                        value={trueFact}
                    />
                </form>
            </div>
            <div>
                <form
                    className={classes.numberOfRoundsForm}
                    noValidate
                    autoComplete="off"
                    onChange={(e) => setGameName(e.target.value)}
                    value={falseFact}
                >
                    <TextField
                        id="filled-basic"
                        label="False fact..."
                        variant="filled"
                        value={falseFact}
                    />
                </form>
            </div>
            <div>
                <Button
                    className={classes.createGameButton}
                    variant="contained"
                    color="primary"
                    onClick={() =>
                        handleClick({
                            displayName: 'Arshi',
                            fact: trueFact,
                            lie: falseFact,
                            playerId: '9b02d6d5-e812-4fda-999c-5625b87c62cc',
                        })
                    }
                >
                    Create Game
                </Button>
            </div>
        </div>
    )
}
