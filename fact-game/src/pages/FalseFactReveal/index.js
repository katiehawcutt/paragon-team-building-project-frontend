import React from 'react'
import Header from '../../components/Header'

import Round from '../../components/Round'
import Title from '../../components/Title'
import styles from './FalseFactReveal.module.css'

export default function FalseFactReveal({
    displayName,
    roundNumber,
    fakeFact,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text={`${displayName}'s fake fact is...`} />
                <div className={styles.fakeFact}>{fakeFact[0]}</div>
            </main>
        </>
    )
}

//change line 19 for name's ending in 's'
