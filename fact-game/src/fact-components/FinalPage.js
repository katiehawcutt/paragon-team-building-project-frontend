import React from 'react'
import './FinalPage.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    submitBtn: {
        height: '50px',
        width: '220px',
        borderRadius: '28px',
        backgroundColor: '#D99444',
        '&:hover': {
            background: '#B67A35',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '24px',
        color: 'white',
        letterSpacing: '3px',
        textShadow: '2px 2px rgba(0, 0, 0, 0.25)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
        marginTop: '30px',
    },
})

function FinalPage() {
    const classes = useStyles()
    return (
        <div className="podium-container">
            <div className="score-container">
                <div className="thirdPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="3rd-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="../Images/3rd.png"
                            alt="podium-stand"
                            className="podium-stand3"
                        />
                        <h2 className="positionNum3">3</h2>
                    </div>
                </div>
                <div className="fistPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="1st-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="./Images/1st.png"
                            alt="podium-stand"
                            className="podium-stand1"
                        />
                        <h2 className="positionNum1">1</h2>
                    </div>
                </div>
                <div className="secondPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="3nd-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="./Images/2nd.png"
                            alt="podium-stand"
                            className="podium-stand2"
                        />
                        <h2 className="positionNum2">2</h2>
                    </div>
                </div>
            </div>
            <h2 className="winnerName">Name Here Wins!</h2>
            <Button
                className={classes.submitBtn}
                variant="contained"
                color="primary"
            >
                Exit
            </Button>
        </div>
    )
}

export default FinalPage
