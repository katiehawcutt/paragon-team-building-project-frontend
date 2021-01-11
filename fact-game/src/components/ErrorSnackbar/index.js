import React, { useState } from 'react'

import ErrorIcon from '@material-ui/icons/Error'
import Snackbar from '@material-ui/core/Snackbar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    // card: {
    //     backgroundColor: 'transparent',
    //     boxShadow: 'none',
    // },
    // form: {
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    // Input: {
    //     boxShadow: '1px 3px 3px -1px rgba(0, 0, 0, 0.25)',
    //     borderRadius: '1rem',
    //     backgroundColor: '#454B82',
    //     marginLeft: '10px',
    //     marginRight: '10px',
    // },
    // input: {
    //     margin: 0,
    //     width: '90vw',
    //     maxWidth: '500px',
    //     color: 'rgba(255, 255, 255, 1)',
    //     textAlign: 'center',
    //     padding: '0.8rem',
    //     letterSpacing: '0.2rem',
    //     fontSize: '1rem',
    //     boxShadow: 'none',
    //     borderRadius: '0',
    // },
    // inputLabel: {
    //     color: 'rgba(255, 255, 255, 0.5)',
    //     fontSize: '1rem',
    //     letterSpacing: '0.2rem',
    //     textAlign: 'center',
    //     '&.Mui-focused': {
    //         color: 'white',
    //     },
    // },
    // inputLabelAsterisk: {
    //     color: 'rgba(255, 255, 255, 0.5)',
    //     '&.Mui-focused': {
    //         color: 'white',
    //     },
    // },
    // inputLabelFormControl: {
    //     position: 'static',
    //     transform: 'none',
    // },
    // helperText: {
    //     textAlign: 'center',
    // },
    // tooltip: {
    //     fontSize: '1rem',
    //     fontFamily: 'Questrial, sans-serif',
    //     textAlign: 'center',
    // },
    // createGameButton: {
    //     color: 'white',
    //     margin: '2rem auto',
    //     marginBottom: '1rem auto',
    //     width: 'fit-content',
    //     backgroundColor: '#d99444',
    //     '&:hover': {
    //         backgroundColor: '#f3b063',
    //     },
    //     '&:disabled': {
    //         backgroundColor: '#f3b063',
    //         opacity: '0.5',
    //     },
    //     padding: '1rem 3rem',
    //     fontSize: '1.1rem',
    //     boxShadow: '6px 7px 10px 2px rgba(0, 0, 0, 0.25)',
    //     transition: 'background-color 0.25s linear',
    //     textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
    //     borderRadius: '1rem',
    //     letterSpacing: '0.2rem',
    //     textTransform: 'none',
    // },
    // helpIcon: {
    //     margin: '0 0.5rem',
    // },
    // labelContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
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

export default function ErrorSnackbar({
    errorMessage,
    autoHideDuration = 7000,
}) {
    const classes = useStyles()

    const [error, setError] = useState(true)
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            autoHideDuration={autoHideDuration}
            onClose={() => setError(false)}
            open={error}
            message={
                <div className={classes.errorMessageContainer}>
                    <ErrorIcon classes={{ root: classes.errorIcon }} />
                    <span className={classes.errorMessage}>{errorMessage}</span>
                </div>
            }
        />
    )
}
