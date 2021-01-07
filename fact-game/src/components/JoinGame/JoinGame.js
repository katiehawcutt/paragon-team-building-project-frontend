import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'

import CircularProgress from '@material-ui/core/CircularProgress'
import CheckIcon from '@material-ui/icons/Check'

import classnames from 'classnames'
import { useUserContext } from '../../contexts/User'

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
    createGameButton: {
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
})

export default function CreateNewGame({ handleJoin }) {
    const [fact, setFact] = useState()
    const [lie, setLie] = useState()
    const [gameId, setGameId] = useState('')
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const { user } = useUserContext()

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!loading) {
            setSuccess(false)
            setLoading(true)

            handleJoin({
                gameId,
                displayName: user.displayName,
                playerId: user.playerId,
                fact,
                lie,
            })

            setSuccess(true)
            setLoading(false)
        }
    }

    return (
        <Card className={classnames(classes.card, 'animateIn')}>
            <form
                noValidate
                autoComplete="off"
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Game ID"
                    name="rounds"
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
                />
                <TextField
                    label="Enter your fact"
                    name="fact"
                    value={fact}
                    onChange={(e) => setFact(e.target.value)}
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
                            formControl: classes.inputLabelFormControl,
                        },
                    }}
                />
                <TextField
                    label="Enter your lie"
                    name="lie"
                    value={lie}
                    onChange={(e) => setLie(e.target.value)}
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
                            formControl: classes.inputLabelFormControl,
                        },
                    }}
                />
                <FormControl margin="normal">
                    <Button
                        className={classes.createGameButton}
                        variant="contained"
                        disabled={loading}
                        type="submit"
                        endIcon={
                            success ? (
                                <CheckIcon />
                            ) : loading ? (
                                <CircularProgress
                                    size="2rem"
                                    className={classes.buttonProgress}
                                />
                            ) : undefined
                        }
                    >
                        Join game
                    </Button>
                </FormControl>
            </form>
        </Card>
    )
}
