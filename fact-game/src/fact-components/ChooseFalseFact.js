import React from 'react'
import './ChooseFalseFact.css'
import CountDownTimer3 from './CountDownTimer3'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    submitBtn: {
        height: '40px',
        width: '340px',
        borderRadius: '28px',
        backgroundColor: '#454b82',
        '&:hover': {
            background: '#2B2F53',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '24px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
        marginTop: '30px',
        marginLeft: '255px',
        right: '170px',
    },
})

function ChooseFalseFact() {
    const classes = useStyles()
    return (
        <div className="chooseFalseFact-container">
            <CountDownTimer3 />
            <h2>Which Fact is False</h2>
            <div className="facts-container">
                <div className="fact1-container">
                    <div className="fact-info">Fact 1 info goes here.</div>
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="primary"
                    >
                        Select #1
                    </Button>
                </div>
                <div className="fact2-container">
                    <div className="fact-info">Fact2 info goes here.</div>
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
