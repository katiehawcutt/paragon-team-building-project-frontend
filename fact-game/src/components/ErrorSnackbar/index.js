import React, { useState } from 'react'

import ErrorIcon from '@material-ui/icons/Error'
import Snackbar from '@material-ui/core/Snackbar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
