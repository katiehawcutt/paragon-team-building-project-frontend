import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styles from './GameLobby.module.css'

import Header from '../../components/Header'
import Title from '../../components/Title'
import Countdown from '../../components/Countdown'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import FileCopyIcon from '@material-ui/icons/FileCopy'
import CheckIcon from '@material-ui/icons/Check'
import Tooltip from '@material-ui/core/Tooltip'

import ErrorSnackbar from '../../components/ErrorSnackbar'

import useSound from 'use-sound'
import elevatorMusic from '../../sounds/elevatorMusic.mp3'

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
}))

function GameLobby({
    gameId,
    secondsLeft,
    playersInLobby,
    gameNotStartedError,
}) {
    const classes = useStyles()
    const [copied, setCopied] = React.useState(false)

    const TOOLTIP_DURATION_IN_SECONDS = 1

    const timeoutId = React.useRef()

    const [volume] = useState(0.1)
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
                <Countdown secondsLeft={secondsLeft} />
                <Title text="Waiting for other players to join..." />
                <h3 className={styles.gameIdLabel}>Game ID:</h3>
                <Tooltip
                    title={tooltipText}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        className={classes.root}
                        onClick={handleClick}
                        endIcon={endIcon}
                    >
                        {gameId}
                    </Button>
                </Tooltip>
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
