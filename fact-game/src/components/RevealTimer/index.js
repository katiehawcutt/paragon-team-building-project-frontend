import React from 'react'

import styles from './RevealTimer.module.css'
import cn from 'classnames'

import Header from '../Header'
import RevealCountdown from '../RevealCountdown'
import Round from '../Round'
import Title from '../Title'

export default function RevealTimer({
    title,
    roundNumber,
    secondsLeft,
    children,
}) {
    return (
        <>
            <Header />
            <main className={cn(styles.pageContainer, 'animateIn')}>
                <Round roundNumber={roundNumber} />
                <Title text={title} />
                <RevealCountdown secondsLeft={secondsLeft} />
                {children}
            </main>
        </>
    )
}
