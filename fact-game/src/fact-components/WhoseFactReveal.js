import React from 'react'
import CountDownTimer2 from './CountDownTimer2'
import styles from './WhoseFactReveal.module.css'

function WhoseFactReveal({ roundNumber, displayName }) {
    console.log('WhoseFactReveal', { displayName })
    return (
        <div className={styles.whoseFact_container}>
            <h2>Whose Fact was it?</h2>

            <div className={styles.name_container}>
                <p className={styles.whoseFact_name}>{displayName}</p>
            </div>
        </div>
    )
}

export default WhoseFactReveal
