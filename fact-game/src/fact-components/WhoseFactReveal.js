import React from 'react'
import CountDownTimer2 from './CountDownTimer2'
import styles from './WhoseFactReveal.module.css'

function WhoseFactReveal({ roundNumber, displayName }) {
    console.log('WhoseFactReveal', { displayName })
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>The fact belongs to...</h1>

            <div className={styles.name_container}>{displayName}</div>
        </div>
    )
}

export default WhoseFactReveal
