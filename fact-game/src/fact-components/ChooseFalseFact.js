import React from 'react'
import styles from './ChooseFalseFact.module.css'
import CountDownTimer3 from './CountDownTimer3'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    submitBtn: {
        height: '40px',
        width: '340px',
        marginTop: '30px',
        marginLeft: '255px',
        right: '170px',
        borderRadius: '28px',
        fontFamily: 'Questrial',
        fontSize: '24px',
        color: 'white',
        lineHeight: '35px',
        textTransform: 'capitalize',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#454b82',
        '&:hover': {
            background: '#2B2F53',
        },
    },
})

function ChooseFalseFact({
    roundNumber,
    facts,
    handleClick,
    secondsLeft,
    turnId,
}) {
    const classes = useStyles()
    return (
        <div className={styles.chooseFalseFact_container}>
            <CountDownTimer3 />
            <h2>Which Fact is False</h2>
            <p>
                Round #{roundNumber} (Seconds left: {secondsLeft})
            </p>
            <div className={styles.facts_container}>
                <div className={styles.fact1_container}>
                    <div className={styles.fact_info}>{facts[0]}</div>
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="primary"
                    >
                        Select #1
                    </Button>
                </div>
                <div className={styles.fact2_container}>
                    <div className={styles.fact_info}>{facts[1]}</div>
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="primary"
                    >
                        Select #2
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseFalseFact
