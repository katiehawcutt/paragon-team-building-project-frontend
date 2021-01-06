import React from 'react'
import styles from './AnswerSubmitted.module.css'

function AnswerSubmitted() {
    return (
        <>
            <div className={styles.pageContainer}>
                <img
                    className={styles.greenTick}
                    src="./Images/Tick.png"
                    alt="green tick - answer submitted"
                ></img>
            </div>
        </>
    )
}

export default AnswerSubmitted
