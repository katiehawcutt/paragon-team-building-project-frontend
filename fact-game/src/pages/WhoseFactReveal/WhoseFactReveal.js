import React from 'react'

import Header from '../../components/Header/Header'
import Round from '../../components/Round/Round'
import Title from '../../components/Title/Title'
import styles from './WhoseFactReveal.module.css'

export default function WhoseFactReveal({ roundNumber, displayName }) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber={roundNumber} />
                <Title text="The facts belong to..." />
                <div className={styles.nameContainer}>{displayName}</div>
            </main>
        </>
    )
}
