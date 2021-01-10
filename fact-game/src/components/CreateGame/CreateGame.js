import { useEffect, useRef, useState } from 'react'

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

import {
    MINIMUM_GAME_ROUNDS,
    MAXIMUM_GAME_ROUNDS,
    MAXIMUM_FACT_LENGTH,
    MAXIMUM_LIE_LENGTH,
} from '../../constants/gameCreation'

import classnames from 'classnames'
import { useUserContext } from '../../contexts/User'

const useStyles = makeStyles((theme) => ({
    card: {
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
    inputLabelAsterisk: {
        color: 'rgba(255, 255, 255, 0.5)',
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
    createGameButton: {
        color: 'white',
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
        padding: '1rem 3rem',
        fontSize: '1.1rem',
        boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
        transition: 'background-color 0.25s linear',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        letterSpacing: '0.2rem',
        textTransform: 'none',
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
}))

export default function CreateNewGame({ handleCreate, serverSidedError }) {
    const [fact, setFact] = useState('')
    const [lie, setLie] = useState('')
    const [rounds, setRounds] = useState(1)
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const timeoutId = useRef(null)
    const isMounted = useRef(true)

    const { user } = useUserContext()

    const roundsIsInvalid =
        rounds < MINIMUM_GAME_ROUNDS || rounds > MAXIMUM_GAME_ROUNDS
    const roundsHelperText =
        rounds && roundsIsInvalid
            ? `Value must be between ${MINIMUM_GAME_ROUNDS} and ${MAXIMUM_GAME_ROUNDS}.`
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

        if (
            null !== timeoutId.current ||
            roundsIsInvalid ||
            factIsInvalid ||
            lieIsInvalid
        ) {
            return
        }

        setError(false)
        setLoading(true)

        handleCreate({
            displayName: user.displayName,
            playerId: user.playerId,
            fact,
            lie,
            rounds,
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

    const buttonEndIcon = loading ? (
        <CircularProgress size="2rem" className={classes.buttonProgress} />
    ) : null
    const shouldDisableButton =
        loading ||
        !rounds ||
        roundsIsInvalid ||
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
                            Enter number of rounds
                            <Tooltip
                                classes={{
                                    tooltip: classes.tooltip,
                                }}
                                title={
                                    'Here you can enter the number of rounds you want to play. The game will need to have as many players as rounds.'
                                }
                            >
                                <HelpIcon
                                    classes={{ root: classes.helpIcon }}
                                />
                            </Tooltip>
                        </div>
                    }
                    name="rounds"
                    type="number"
                    value={rounds}
                    onChange={(e) =>
                        setRounds(parseInt(e.target.value, 10) || '')
                    }
                    inputProps={{
                        className: classes.input,
                        step: 1,
                        min: MINIMUM_GAME_ROUNDS,
                        max: MAXIMUM_GAME_ROUNDS,
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
                    helperText={roundsHelperText}
                    error={roundsIsInvalid}
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
                        children: <div>aaa</div>,
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
                        className={classes.createGameButton}
                        variant="contained"
                        disabled={shouldDisableButton}
                        type="submit"
                        endIcon={buttonEndIcon}
                    >
                        Create game
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
                                    Sorry, the game can not be created right
                                    now.
                                </span>
                            </div>
                        }
                    />
                </FormControl>
            </form>
        </Card>
    )
}
