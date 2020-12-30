import React from 'react'
import styles from './ChooseFalseFact.module.css'
// import CountDownTimer3 from './CountDownTimer3'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    button: {
        width: '500px',
        margin: '30px',
        marginTop: '60px',
        borderRadius: '10px',
        fontFamily: 'Questrial',
        fontSize: '30px',
        padding: '40px',
        color: 'white',
        textTransform: 'none',
        lineHeight: '35px',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#6d44d9',
        '&:hover': {
            background: '#d99444',
            transform: 'scale(1.1)',
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
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={styles.roundLabel}>Round #{roundNumber}</div>
                <h1 className={styles.pageTitle}>Which fact is false?</h1>
                <div className={styles.countdown}>{secondsLeft}</div>
            </header>
            <div className={styles.chooseFalseFact_container}>
                {/* <CountDownTimer3 /> */}
                {facts.map((fact) => {
                    return (
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            key={fact}
                            handleClick={() =>
                                handleClick({
                                    choice: fact,
                                })
                            }
                        >
                            {fact}
                        </Button>
                    )
                })}

                {/* <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    {facts[1]}
                </Button> */}
            </div>
        </div>
    )
}

export default ChooseFalseFact
