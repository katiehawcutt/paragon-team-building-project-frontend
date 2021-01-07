import React from 'react'
import styles from './DisplayFact.module.css'

function DisplayFact({ facts }) {
    return (
        <>
            <div className={styles.factContainer}>
                {facts.map((fact, i) => {
                    return (
                        <div className={styles.factDisplay} key={i}>
                            <div key={i}>{fact}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DisplayFact
