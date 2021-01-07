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

import FileCopyIcon from '@material-ui/icons/FileCopy'
import CheckIcon from '@material-ui/icons/Check'
import Tooltip from '@material-ui/core/Tooltip'

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />
// }

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

function GameLobby({ gameId, secondsLeft }) {
    const classes = useStyles()
    const [copied, setCopied] = React.useState(false)

    const TOOLTIP_DURATION_IN_SECONDS = 1

    const timeoutId = React.useRef()

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
        </>
    )
}

export default GameLobby
