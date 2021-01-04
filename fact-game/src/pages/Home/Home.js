import React, { useState } from 'react'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import CreateGame from '../../fact-components/CreateGame/CreateGame'
import JoinGame from '../../fact-components/JoinGame/JoinGame'

import {
    createMuiTheme,
    ThemeProvider,
    makeStyles,
} from '@material-ui/core/styles'

import classnames from 'classnames'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Questrial, sans-serif',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        letterSpacing: '0.4rem',
        padding: '2rem',
        fontSize: '3rem',
        margin: '0',
    },
    buttonIcon: {
        boxShadow: '1px 4px 10px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '100%',
        height: '2rem',
        width: 'auto',
    },
    button: {
        transition: 'background-color 0.25s linear',
        padding: '1.5rem',
        borderRadius: '1.5rem',
        boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: '#FFFFFF',
        margin: '1rem',
        fontSize: '1.1rem',
        textTransform: 'none',
        letterSpacing: '0.2rem',
    },
    createNewGameButton: {
        backgroundColor: '#3F4477',
        '&:hover': {
            background: '#454b82',
        },
    },
    joinGameButton: {
        backgroundColor: '#8152ff',
        '&:hover': {
            background: '#9d79ff',
        },
    },
    goBackButton: {
        padding: '0.5rem',
        borderRadius: '1rem',
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: '#FFFFFF',
        margin: '0.5rem',
        fontSize: '1rem',
        textTransform: 'none',
        letterSpacing: '0.2rem',
        backgroundColor: '#454b82',
        '&:hover': {
            backgroundColor: '#6a70a5',
        },
    },
})

const pages = {
    CREATE: 'CREATE',
    JOIN: 'JOIN',
}

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Questrial, sans-serif',
    },
    palette: {
        buttons: {
            purple: '#3F4477',
            purpleHover: '#454b82',
            lightPurple: '#8152ff',
            lightPurpleHover: '#9d79ff',
            gold: '#d99444',
        },
        primary: {
            main: '#3f4477',
        },
        secondary: {
            main: '#d99444',
        },
    },
})

export default function Home() {
    const [page, setPage] = useState('')
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Container
                style={{
                    backgroundColor: 'var(--dark-purple)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    width: '100vw',
                    padding: '2rem',
                }}
            >
                {/* Header */}
                <header className={classes.header}>
                    {!page && <h1 className={classes.title}>The Facts Game</h1>}
                    {pages.CREATE === page && (
                        <h1 className={classes.title}>Create New Game</h1>
                    )}
                    {pages.JOIN === page && (
                        <h1 className={classes.title}>Join Existing Game</h1>
                    )}
                </header>

                {/* Main */}
                <main className={classes.main}>
                    {/* Create or join page */}
                    {!page && (
                        <div className={classes.buttonGroup}>
                            {(!page || pages.CREATE === page) && (
                                <Button
                                    size="large"
                                    startIcon={
                                        <img
                                            src={'/images/GameIcon2.png'}
                                            alt="src"
                                            className={classes.buttonIcon}
                                        />
                                    }
                                    onClick={() => setPage(pages.CREATE)}
                                    className={classnames(
                                        classes.button,
                                        classes.createNewGameButton
                                    )}
                                >
                                    Create New Game
                                </Button>
                            )}

                            {(!page || pages.JOIN === page) && (
                                <Button
                                    size="large"
                                    startIcon={
                                        <img
                                            src={'/images/gameIcon.png'}
                                            alt="src"
                                            className={classes.buttonIcon}
                                        />
                                    }
                                    onClick={() => setPage(pages.JOIN)}
                                    className={classnames(
                                        classes.button,
                                        classes.joinGameButton
                                    )}
                                >
                                    Join Existing Game
                                </Button>
                            )}
                        </div>
                    )}
                    {/* Create */}

                    {pages.CREATE === page && <CreateGame />}
                    {pages.JOIN === page && <JoinGame />}

                    {/* Join */}
                    {page && (
                        <Button
                            className={classes.goBackButton}
                            variant="text"
                            onClick={() => setPage('')}
                        >
                            Go back
                        </Button>
                    )}
                </main>
            </Container>
        </ThemeProvider>
    )
}
