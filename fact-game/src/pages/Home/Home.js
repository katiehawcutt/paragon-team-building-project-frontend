import React, { useState } from 'react'
import styles from './Home.module.css'
import classnames from 'classnames'

import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '@material-ui/core/Button'
import CreateGame from '../../components/CreateGame/CreateGame'
import JoinGame from '../../components/JoinGame/JoinGame'

import {
    createMuiTheme,
    ThemeProvider,
    makeStyles,
} from '@material-ui/core/styles'

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
        fontFamily: 'Questrial',
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
        marginRight: '10px',
    },
    button: {
        transition: 'background-color 0.25s linear',
        padding: '1.5rem',
        borderRadius: '1.5rem',
        boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: '#FFFFFF',
        margin: '1rem',
        fontSize: '1.3rem',
        textTransform: 'none',
        letterSpacing: '0.2rem',
        width: '350px',
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
        padding: '0.8rem',
        borderRadius: '1rem',
        boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: '#FFFFFF',
        margin: '0.5rem',
        marginTop: '0',
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

export default function Home({ handleCreate, handleJoin }) {
    const [page, setPage] = useState('')
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div className={styles.pageContainer}>
                <header className={classes.header}>
                    {!page && <Title text="The Fact Game" />}
                    {pages.CREATE === page && <Title text="Create New Game" />}
                    {pages.JOIN === page && <Title text="Join Existing Game" />}
                </header>

                {/* Main */}
                <main className={classes.main}>
                    {/* Create or join page */}
                    {!page && (
                        <div
                            className={classnames(
                                classes.buttonGroup,
                                'animateIn'
                            )}
                        >
                            {(!page || pages.CREATE === page) && (
                                <Button
                                    size="large"
                                    startIcon={
                                        <img
                                            src={
                                                '/images/GameIcon2-resized.png'
                                            }
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
                                            src={'/images/gameIcon-resized.png'}
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

                    {pages.CREATE === page && (
                        <CreateGame handleCreate={handleCreate} />
                    )}
                    {pages.JOIN === page && (
                        <JoinGame handleJoin={handleJoin} />
                    )}

                    {/* Join */}
                    {page && (
                        <Button
                            className={classnames(
                                classes.goBackButton,
                                'animateIn'
                            )}
                            variant="text"
                            onClick={() => setPage('')}
                        >
                            Go back
                        </Button>
                    )}
                </main>
            </div>
        </ThemeProvider>
    )
}
