import React from 'react'
import styles from './FinalPage.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    submitBtn: {
        height: '50px',
        width: '220px',
        borderRadius: '28px',
        marginTop: '30px',
        fontFamily: 'Questrial',
        fontSize: '24px',
        letterSpacing: '3px',
        textTransform: 'capitalize',
        lineHeight: '35px',
        color: 'white',
        textShadow: '2px 2px rgba(0, 0, 0, 0.25)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#D99444',
        '&:hover': {
            background: '#B67A35',
        },
    },
})

function FinalPage({ leaderboard, top3 }) {
    // const leaderboard = [{ displayName: 'A', score: 0 }]
    // const top3 = [
    //     { displayName: 'B', score: 0 },
    //     { displayName: 'C', score: 0 },
    //     { displayName: 'D', score: 0 },
    // ]

    const classes = useStyles()
    return (
        <div className={styles.podium_container}>
            <div className={styles.score_container}>
                <div className={styles.thirdPlace_container}>
                    <img
                        src="./Images/Tick.png"
                        alt="3rd-place"
                        className={styles.profilePic}
                    />
                    <div className={styles.banner}>
                        <img
                            src="../Images/3rd.png"
                            alt="podium-stand"
                            className={styles.podium_stand3}
                        />
                        <h2 className={styles.positionNum3}>3</h2>
                    </div>
                    <h2>{top3[2].displayName}</h2>
                </div>
                <div className={styles.fistPlace_container}>
                    <img
                        src="./Images/Tick.png"
                        alt="1st-place"
                        className={styles.profilePic}
                    />
                    <div className={styles.banner}>
                        <img
                            src="./Images/1st.png"
                            alt="podium-stand"
                            className={styles.podium_stand1}
                        />
                        <h2 className={styles.positionNum1}>1</h2>
                    </div>
                    <h2>{top3[0].displayName}</h2>
                </div>
                <div className={styles.secondPlace_container}>
                    <img
                        src="./Images/Tick.png"
                        alt="3nd-place"
                        className={styles.profilePic}
                    />
                    <div className={styles.banner}>
                        <img
                            src="./Images/2nd.png"
                            alt="podium-stand"
                            className={styles.podium_stand2}
                        />
                        <h2 className={styles.positionNum2}>2</h2>
                    </div>
                    <h2>{top3[1].displayName}</h2>
                </div>
            </div>
            {/* <h2 className={styles.winnerName}>{top3[0].displayName}</h2> */}
            {/* <Button
                className={classes.submitBtn}
                variant="contained"
                color="primary"
            >
                Exit
            </Button> */}
            <p>
                {leaderboard[0].displayName}:{leaderboard[0].score}
            </p>
        </div>
    )
}

export default FinalPage
