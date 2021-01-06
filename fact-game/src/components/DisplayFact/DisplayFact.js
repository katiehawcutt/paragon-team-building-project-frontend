import React from 'react'
import styles from './DisplayFact.module.css'

function DisplayFact({ facts }) {
    return (
        <>
            {facts.map((fact, i) => {
                return (
                    <div className={styles.factContainer} key={i}>
                        <div key={i}>{fact}</div>
                    </div>
                )
            })}
        </>
    )
}

export default DisplayFact
