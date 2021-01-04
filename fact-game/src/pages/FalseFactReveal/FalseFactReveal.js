import React from 'react'
import Countdown from '../../components/Countdown/Countdown'
import DisplayFact from '../../components/DisplayFact/DisplayFact'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './FalseFactReveal.module.css'

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
                <Title text="Khang's truthy is..." />
                <div className={styles.countdown_countainer}>
                    <Countdown secondsLeft="10" />
                </div>
                <div className={styles.displayFact_countainer}>
                    <DisplayFact
                        facts={[
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        ]}
                    />
                </div>
            </main>
        </>
    )
}

/*ToDo - 
1. Change hardcoded round
2. Change title name 
3. Change hardcoded countdown
4. Change hardcoded facts */
