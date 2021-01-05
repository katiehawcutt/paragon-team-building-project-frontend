import React from 'react'
import cn from 'classnames'
import styles from './GameLobby.module.css'

import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Countdown from '../../components/Countdown/Countdown'

import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#d99444',
        '&:hover': {
            backgroundColor: '#f3b063',
        },
        color: 'white',
        width: 'fit-content',
        padding: '1rem 3rem',
        fontFamily: 'Questrial, sans-serif',
        borderRadius: '2rem',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        margin: '2rem',
        marginTop: '2rem',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontSize: '30px',
        letterSpacing: '0.2rem',
        transition: 'background-color 0.25s linear',
    },
}))

function GameLobby({ gameId, secondsLeft }) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Countdown secondsLeft={secondsLeft} />
                <Title text="Waiting for other players to join..." />
                <h3 className={styles.gameIdLabel}>Game ID:</h3>
                <Button
                    className={classes.root}
                    onClick={async (e) => {
                        handleClick()
                        if (!navigator.clipboard) {
                            // Clipboard API not available
                            return
                        }
                        const text = e.target.innerText
                        try {
                            await navigator.clipboard.writeText(text)
                        } catch (err) {
                            console.error('Failed to copy!', err)
                        }
                    }}
                >
                    {gameId}
                    <img
                        className={styles.copyIcon}
                        src="./Images/copy-svg.svg"
                        alt="copy icon"
                    />
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success">
                        Game ID copied!
                    </Alert>
                </Snackbar>

                <img
                    className={styles.hourglassImage}
                    src="./Images/hourglass.png"
                    alt="spinning eggtimer"
                ></img>
            </main>
        </>
    )
}

export default GameLobby
