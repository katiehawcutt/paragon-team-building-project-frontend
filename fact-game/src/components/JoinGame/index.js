import { useState, useRef, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'

import CircularProgress from '@material-ui/core/CircularProgress'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'

import HelpIcon from '@material-ui/icons/Help'
import ErrorIcon from '@material-ui/icons/Error'

import classnames from 'classnames'
import { useUserContext } from '../../contexts/User'

import {
    MAXIMUM_FACT_LENGTH,
    MAXIMUM_LIE_LENGTH,
    MAXIMUM_GAME_ID_LENGTH,
} from '../../constants/gameCreation'

const useStyles = makeStyles({
    card: {
        // padding: '1rem',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    Input: {
        boxShadow: '1px 3px 3px -1px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        backgroundColor: '#454B82',
        marginLeft: '10px',
        marginRight: '10px',
    },
    input: {
        margin: 0,
        width: '90vw',
        maxWidth: '500px',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        padding: '0.8rem',
        letterSpacing: '0.2rem',
        fontSize: '1rem',
        boxShadow: 'none',
        borderRadius: '0',
    },
    inputLabel: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '1rem',
        letterSpacing: '0.2rem',
        textAlign: 'center',
        '&.Mui-focused': {
            color: 'white',
        },
    },
    inputLabelFormControl: {
        position: 'static',
        transform: 'none',
    },
    helperText: {
        textAlign: 'center',
    },
    tooltip: {
        fontSize: '1rem',
        fontFamily: 'Questrial, sans-serif',
        textAlign: 'center',
    },
    joinGameButton: {
        margin: '2rem auto',
        marginBottom: '1rem auto',
        width: 'fit-content',
        backgroundColor: '#d99444',
        '&:hover': {
            backgroundColor: '#f3b063',
        },
        '&:disabled': {
            backgroundColor: '#f3b063',
            opacity: '0.5',
        },
        textTransform: 'none',
        padding: '1rem 3rem',
        fontSize: '1.1rem',
        boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
        transition: 'background-color 0.25s linear',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        letterSpacing: '0.2rem',
        color: 'white',
    },
    helpIcon: {
        margin: '0 0.5rem',
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorIcon: {
        margin: '0 0.5rem',
    },
    errorMessageContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMessage: {
        color: 'white',
    },
})

export default function JoinExistingGame({ handleJoin, gameNotJoinedError }) {
    const [fact, setFact] = useState('')
    const [lie, setLie] = useState('')
    const [gameId, setGameId] = useState('')
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const timeoutId = useRef(null)
    const isMounted = useRef(true)

    const { user } = useUserContext()

    const gameIdIsInvalid = gameId.length > MAXIMUM_GAME_ID_LENGTH
    const gameIdHelperText = gameIdIsInvalid
        ? `Game ID cannot be longer than ${MAXIMUM_GAME_ID_LENGTH} characters.`
        : undefined
    let factIsInvalid
    let lieIsInvalid
    let factHelperText
    let lieHelperText

    if (lie.length > MAXIMUM_LIE_LENGTH) {
        lieIsInvalid = true
        lieHelperText = `Lie must be shorter than ${MAXIMUM_LIE_LENGTH} characters (${
            lie.length - MAXIMUM_LIE_LENGTH
        } character(s) too long).`
    }
    if (fact.length > MAXIMUM_FACT_LENGTH) {
        factIsInvalid = true
        factHelperText = `Fact must be shorter than ${MAXIMUM_FACT_LENGTH} characters (${
            fact.length - MAXIMUM_FACT_LENGTH
        } character(s) too long).`
    }
    if (fact && fact === lie) {
        factIsInvalid = lieIsInvalid = true
        factHelperText = lieHelperText = 'Fact and lie cannot be the same.'
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (null !== timeoutId.current || factIsInvalid || lieIsInvalid) {
            return
        }

        setError(false)
        setLoading(true)

        handleJoin({
            gameId,
            displayName: user.displayName,
            playerId: user.playerId,
            fact,
            lie,
        })

        timeoutId.current = setTimeout(() => {
            if (isMounted.current) {
                setLoading(false)
                setError(true)
            }
            timeoutId.current = null
        }, 5000)
    }

    /**
     * Keep track of whether component is mounted.
     */
    useEffect(() => {
        isMounted.current = true
        return () => {
            clearTimeout(timeoutId.current)
            isMounted.current = false
        }
    }, [])

    /**
     * Update error state
     */
    useEffect(() => {
        if (gameNotJoinedError) {
            setLoading(false)
        }
        setError(Boolean(gameNotJoinedError))
    }, [gameNotJoinedError])

    const buttonEndIcon = loading ? (
        <CircularProgress size="2rem" className={classes.buttonProgress} />
    ) : null

    const shouldDisableButton =
        loading ||
        !gameId ||
        gameIdIsInvalid ||
        !fact ||
        factIsInvalid ||
        !lie ||
        lieIsInvalid

    return (
        <Card className={classnames(classes.card, 'animateIn')}>
            <form
                noValidate
                autoComplete="off"
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <TextField
                    label={
                        <div className={classes.labelContainer}>
                            Enter game ID
                            <Tooltip
                                classes={{
                                    tooltip: classes.tooltip,
                                }}
                                title={
                                    'Here you can enter the ID of the game you want to join.'
                                }
                            >
                                <HelpIcon
                                    classes={{ root: classes.helpIcon }}
                                />
                            </Tooltip>
                        </div>
                    }
                    name="gameId"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    inputProps={{
                        className: classes.input,
                    }}
                    InputProps={{
                        className: classnames(classes.Input),
                        disableUnderline: true,
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.inputLabel,
                            formControl: classes.inputLabelFormControl,
                        },
                    }}
                    helperText={gameIdHelperText}
                    error={gameIdIsInvalid}
                    FormHelperTextProps={{
                        classes: {
                            root: classes.helperText,
                        },
                    }}
                />
                <TextField
                    label={
                        <div className={classes.labelContainer}>
                            Enter your fact
                            <Tooltip
                                title={
                                    "This is where you can enter something that's true about yourself. During the game, others will try to guess which of your statements is the truth."
                                }
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <HelpIcon
                                    classes={{ root: classes.helpIcon }}
                                />
                            </Tooltip>
                        </div>
                    }
                    name="fact"
                    value={fact}
                    onChange={(e) => {
                        setFact(e.target.value.replace(/\s\s+/g, ' '))
                    }}
                    margin="normal"
                    multiline
                    inputProps={{
                        className: classes.input,
                    }}
                    InputProps={{
                        className: classnames(classes.Input),
                        disableUnderline: true,
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.inputLabel,
                            asterisk: classes.inputLabelAsterisk,
                            formControl: classes.inputLabelFormControl,
                        },
                    }}
                    helperText={factHelperText}
                    error={factIsInvalid}
                    FormHelperTextProps={{
                        classes: {
                            root: classes.helperText,
                        },
                    }}
                />
                <TextField
                    label={
                        <div className={classes.labelContainer}>
                            Enter your lie
                            <Tooltip
                                classes={{ tooltip: classes.tooltip }}
                                title={
                                    "This is where you can enter something that's untrue about yourself. During the game, others will try to guess which of your statements is the truth."
                                }
                            >
                                <HelpIcon
                                    classes={{ root: classes.helpIcon }}
                                />
                            </Tooltip>
                        </div>
                    }
                    name="lie"
                    value={lie}
                    onChange={(e) => {
                        setLie(e.target.value.replace(/\s\s+/g, ' '))
                    }}
                    margin="normal"
                    multiline
                    inputProps={{
                        className: classes.input,
                    }}
                    InputProps={{
                        className: classnames(classes.Input),
                        disableUnderline: true,
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.inputLabel,
                            asterisk: classes.inputLabelAsterisk,
                            formControl: classes.inputLabelFormControl,
                        },
                    }}
                    helperText={lieHelperText}
                    error={lieIsInvalid}
                    FormHelperTextProps={{
                        classes: {
                            root: classes.helperText,
                        },
                    }}
                />
                <FormControl margin="normal">
                    <Button
                        className={classes.joinGameButton}
                        variant="contained"
                        disabled={shouldDisableButton}
                        type="submit"
                        endIcon={buttonEndIcon}
                    >
                        Join game
                    </Button>

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        autoHideDuration={7000}
                        onClose={() => setError(false)}
                        open={error}
                        message={
                            <div className={classes.errorMessageContainer}>
                                <ErrorIcon
                                    classes={{ root: classes.errorIcon }}
                                />
                                <span className={classes.errorMessage}>
                                    {gameNotJoinedError ||
                                        'Sorry, this game cannot be joined right now.'}
                                </span>
                            </div>
                        }
                    />
                </FormControl>
            </form>
        </Card>
    )
}
