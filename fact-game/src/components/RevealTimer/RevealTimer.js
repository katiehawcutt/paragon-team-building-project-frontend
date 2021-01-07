import React from 'react'
import cn from 'classnames'

import Header from '../Header/Header'
import RevealCountdown from '../RevealCountdown/RevealCountdown'
import Round from '../Round/Round'
import Title from '../Title/Title'
import styles from './RevealTimer.module.css'

export default function RevealTimer({ title, roundNumber, secondsLeft }) {
    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text={title} />
                <RevealCountdown secondsLeft={secondsLeft} />
            </main>
        </>
    )
}