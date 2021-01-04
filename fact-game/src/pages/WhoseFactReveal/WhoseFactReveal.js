import React from 'react'
import Countdown from '../../components/Countdown/Countdown'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './WhoseFactReveal.module.css'

export default function FalseFactReveal({
    roundNumber,
    name,
    secondsLeft,
    facts,
}) {
    return (
        <>
            <main className={styles.pageContainer}>
                <div className={styles.round_countainer}>
                    <Round roundNumber="1" />
                </div>
                <Title text="Whose Fact was it?" />
                <div className={styles.countdown_countainer}>
                    <Countdown secondsLeft="5" />
                </div>

                <div className={styles.nameContainer}>
                    <span className={styles.nameLabel}>Arshi</span>
                </div>
            </main>
        </>
    )
}

/*ToDo - 
1. Change hardcoded round
2. Change title name 
3. Change hardcoded countdown
4. Change hardcoded name */
