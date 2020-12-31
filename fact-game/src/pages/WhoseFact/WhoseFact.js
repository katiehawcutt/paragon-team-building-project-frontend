import React from 'react'
import styles from './WhoseFact.module.css'
import Title from '../../fact-components/Title/Title'
import Round from '../../fact-components/Round/Round'

export default function WhoseFact() {
    return (
        <>
            <header>X</header>
            <main className={styles.pageContainer}>
                <Round />
                <Title text="Whose Facts?" />
                <p>10</p>
                <div className={styles.factContainer}></div>
                <div className={}
            </main>
        </>
    )
}
