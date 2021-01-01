import React from 'react'
import styles from './DisplayFact.module.css'

function DisplayFact() {
    return (
        <div className={styles.factContainer}>
            {facts.map((fact, i) => {
                return (
                    <div className={styles.facts} key={i}>
                        {fact}
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayFact
