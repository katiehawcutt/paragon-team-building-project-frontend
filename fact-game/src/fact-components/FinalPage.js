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

function FinalPage() {
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
                </div>
            </div>
            <h2 className={styles.winnerName}>Name Here Wins!</h2>
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
