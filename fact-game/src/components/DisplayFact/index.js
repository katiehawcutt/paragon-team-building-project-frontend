import React from 'react'

import styles from './DisplayFact.module.css'

import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
    tooltip: {
        fontSize: '1rem',
        fontFamily: 'Questrial, sans-serif',
        textAlign: 'center',
    },
}))

function DisplayFact({ facts }) {
    const classes = useStyles()

    const tooltipText =
        "In the list below, click the name of the person that you suspect these facts are about. As long as there's time left, you can always change your answer!"

    return (
        <div className={styles.factContainer}>
            {facts.map((fact, i) => {
                return (
                    <Tooltip
                        title={tooltipText}
                        classes={{ tooltip: classes.tooltip }}
                        key={i}
                    >
                        <div className={styles.factDisplay}>{fact}</div>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default DisplayFact
