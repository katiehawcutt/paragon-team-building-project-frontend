import React from 'react'
// import Countdown from '../../components/Countdown/Countdown'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './WhoseFactReveal.module.css'

export default function WhoseFactReveal({ roundNumber, displayName }) {
    return (
        <>
            <main className={styles.pageContainer}>
                <div className={styles.round_countainer}>
                    <Round roundNumber={roundNumber} />
                </div>
                <Title text="Whose Fact was it?" />
                <div className={styles.nameContainer}>
                    <span className={styles.nameLabel}>{displayName}</span>
                </div>
            </main>
        </>
    )
}
