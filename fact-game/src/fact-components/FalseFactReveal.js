import React from 'react'
import CountDownTimer3 from './CountDownTimer3'
import styles from './FalseFactReveal.module.css'

function FalseFactReveal() {
    return (
        <div className={styles.falseFact_container}>
            <h2 className={styles.falseFact_title}>Whose Fact is false?</h2>
            <CountDownTimer3 />
            <div className={styles.name_container2}>
                <p className={styles.whoseFact_name2}>Name Goes Here</p>
                <div className={styles.fact_info2}>Fact 1 info goes here.</div>
            </div>
        </div>
    )
}

export default FalseFactReveal
