import React, { useState, useEffect } from 'react'

import cn from 'classnames'
import styles from './GameLobby.module.css'

import useSound from 'use-sound'
import elevatorMusic from '../../sounds/elevatorMusic.mp3'

import Header from '../../components/Header'
import Title from '../../components/Title'
import LobbyList from '../../components/LobbyList'
import ErrorSnackbar from '../../components/ErrorSnackbar'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CheckIcon from '@material-ui/icons/Check'
import Tooltip from '@material-ui/core/Tooltip'

import { useUserContext } from '../../contexts/User'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#d99444',
        '&:hover': {
            backgroundColor: '#f3b063',
        },
        width: 'fit-content',
        padding: '1rem 3rem',
        fontFamily: 'Questrial, sans-serif',
        borderRadius: '1rem',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        margin: '2rem',
        marginTop: '2rem',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontSize: '1rem',
        letterSpacing: '0.2rem',
        transition: 'background-color 0.25s linear',
        textTransform: 'none',
    },
    copyIconButton: {
        marginLeft: '1rem',
    },
    tooltip: {
        fontSize: '1rem',
        fontFamily: 'Questrial, sans-serif',
        textAlign: 'center',
    },
    startButton: {
        backgroundColor: '#8152ff',
        '&:hover': {
            backgroundColor: '#9d79ff',
        },
    },
}))

function GameLobby({
    gameId,
    isCreator,
    secondsLeft,
    players,
    gameNotStartedError,
    startGame,
}) {
    const { user } = useUserContext()

    const classes = useStyles()
    const [copied, setCopied] = React.useState(false)

    const TOOLTIP_DURATION_IN_SECONDS = 1

    const timeoutId = React.useRef()

    const [volume] = useState(0.3)
    const [elevator, { stop }] = useSound(elevatorMusic, { volume })

    useEffect(() => {
        const timeoutId = setTimeout(elevator, 100)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [elevator, stop])

    const handleClick = async () => {
        try {
            await navigator?.clipboard?.writeText(gameId)
            setCopied(true)
            timeoutId.current = setTimeout(() => {
                setCopied(false)
            }, TOOLTIP_DURATION_IN_SECONDS * 1000)
        } catch (err) {
            setCopied(false)
        }
    }

    /**
     * Cleanup on unmount.
     */
    React.useEffect(() => {
        return () => clearTimeout(timeoutId.current)
    }, [setCopied])

    const endIcon = copied ? (
        <CheckIcon
            fontSize="inherit"
            classes={{ root: classes.copyIconButton }}
        />
    ) : (
        <FileCopyIcon
            fontSize="inherit"
            classes={{ root: classes.copyIconButton }}
        />
    )

    const tooltipText = copied
        ? 'Copied! Ready to share!'
        : 'Copy this game ID and share it with others for them to join the game!'

    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Title
                    text="Waiting for host to start the game..."
                    className={styles.title}
                />
                <div className={styles.flexContainer}>
                    <div className={styles.leftContainer}></div>
                    <div className={styles.centerContainer}>
                        <img
                            className={styles.hourglassImage}
                            src="./Images/hourglass.png"
                            alt="spinning eggtimer"
                        />
                        {isCreator && (
                            <Tooltip
                                title="Start the game when your team is ready to begin!"
                                classes={{ tooltip: classes.tooltip }}
                            >
                                {/* Start game button */}
                                <Button
                                    className={cn(
                                        classes.root,
                                        classes.startButton
                                    )}
                                    onClick={() =>
                                        startGame({
                                            gameId,
                                            playerId: user.playerId,
                                        })
                                    }
                                >
                                    Start game
                                </Button>
                            </Tooltip>
                        )}
                        <h3 className={styles.gameIdLabel}>Game ID:</h3>
                        <Tooltip
                            title={tooltipText}
                            classes={{ tooltip: classes.tooltip }}
                        >
                            {/* Copy button */}
                            <Button
                                className={classes.root}
                                onClick={handleClick}
                                endIcon={endIcon}
                            >
                                {gameId}
                            </Button>
                        </Tooltip>
                    </div>
                    <div className={styles.rightContainer}>
                        <LobbyList playersInLobby={players} />
                    </div>
                </div>
            </main>
            {gameNotStartedError && (
                <ErrorSnackbar
                    errorMessage={gameNotStartedError}
                    autoHideDuration={null}
                />
            )}
        </>
    )
}

export default GameLobby
