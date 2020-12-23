import React, { useState } from 'react'
import './EnterFactPage.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CountDownTimer from './CountDownTimer'

const useStyles = makeStyles({
    submitBtn: {
        height: '60px',
        width: '200px',
        borderRadius: '28px',
        backgroundColor: '#454b82',
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
    },
})

function EnterFactPage() {
    const classes = useStyles()
    const [trueFact, setTrueFact] = useState('')
    const [falseFact, setFalseFact] = useState('')
    const [factData, setFactData] = useState({})

    //Need to send factData to the server.

    function handleClick() {
        setFactData([trueFact, falseFact])
        console.log({ trueFact })
        console.log({ falseFact })
        console.log({ factData })
    }

    return (
        <div className="enter-fact-container">
            <div className="EnterFact-Page-container">True & False Fact</div>
            <CountDownTimer />
            <div className="input-container">
                <div className="trueInputandBtn">
                    <h2>True Fact</h2>
                    <textarea
                        onChange={(e) => setTrueFact(e.target.value)}
                        type="text"
                        value={trueFact}
                        className="trueFact"
                        placeholder="Enter your true fact here..."
                    />
                </div>
                <div className="falseInputandBtn">
                    <h2>False Fact</h2>
                    <textarea
                        className="falseFact"
                        onChange={(e) => setFalseFact(e.target.value)}
                        type="text"
                        value={falseFact}
                        className="falseFact"
                        placeholder="Enter your false fact here..."
                    />
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="primary"
                        onClick={() => handleClick({ trueFact, falseFact })}
                    >
                        Submit Facts
                    </Button>
                </div>

                <div className="lobbby-container">
                    <h2 className="lob-title-container">Lobbby</h2>
                    <ul className="lobby-name-container">
                        <li>
                            <img src="../Images/gameIcon.png" alt="Game-Icon" />
                            <p>Name: generated</p>
                            <img src="../Images/Tick.png" alt="Tick-Icon" />
                        </li>
                        <li>
                            <img src="../Images/gameIcon.png" alt="Game-Icon" />
                            <p>Name: generated</p>
                            <img src="../Images/Tick.png" alt="Tick-Icon" />
                        </li>
                        <li>
                            <img src="../Images/gameIcon.png" alt="Game-Icon" />
                            <p>Name: generated</p>
                            <img src="../Images/Tick.png" alt="Tick-Icon" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* <button
                    className="submitButton"
                    onClick={() => handleClick({ trueFact, falseFact })}
                >
                    Submit
                </button> */}
        </div>
    )
}

export default EnterFactPage
