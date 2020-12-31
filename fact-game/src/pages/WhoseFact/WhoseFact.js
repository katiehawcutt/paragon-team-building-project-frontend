import React from 'react'
import styles from './WhoseFact.module.css'
import Round from '../../fact-components/Round/Round'

export default function WhoseFact() {
    return (
        <>
            <header>X</header>
            <main className={styles.pageContainer}>
                <Round />
                <Title text="Whose Facts?" />
                <p>10</p>
            </main>
        </>
    )
}
