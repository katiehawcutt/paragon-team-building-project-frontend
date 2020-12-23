import React, { useState, useEffect } from 'react'
import './HomePage.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
    newG: {
        padding: '20px',
        height: '100px',
        width: '300px',
        marginRight: '90px',
        borderRadius: '28px',
        backgroundColor: '#454b82',
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        textAlign: 'right',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
    },
    existingG: {
        padding: '20px',
        height: '100px',
        width: '300px',
        marginRight: '10px',
        borderRadius: '28px',
        backgroundColor: '#6D44D9',
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        textAlign: 'left',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
    },
})

function HomePage() {
    const classes = useStyles()
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
            {/* <button className="createNewGame"> Create New Game</button> */}

            <Button
                className={classes.newG}
                variant="contained"
                color="primary"
                startIcon={<Avatar src={'../Images/gameIcon.png'} />}
            >
                Create New Game
            </Button>

            <Button
                className={classes.existingG}
                variant="contained"
                color="primary"
                startIcon={<Avatar src={'../Images/gameIcon.png'} />}
                onClick={handleClick}
            >
                Join Existing Game
            </Button>
        </div>
    )
}

export default HomePage
