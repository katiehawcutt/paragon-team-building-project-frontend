import React from 'react'
import CountDownTimer2 from './CountDownTimer2'
import styles from './WhoseFactReveal.module.css'

function WhoseFactReveal() {
    return (
        <div className={styles.whoseFact_container}>
            <h2>Whose Fact was it?</h2>
            <CountDownTimer2 />
            <div className={styles.name_container}>
                <p className={styles.whoseFact_name}>Name Goes Here</p>
            </div>
        </div>
    )
}

export default WhoseFactReveal
