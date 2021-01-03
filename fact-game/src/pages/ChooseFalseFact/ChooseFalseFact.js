import React from 'react'
import styles from './ChooseFalseFact.module.css'
import Header from '../../fact-components/Header/Header'
import Round from '../../fact-components/Round/Round'
import Title from '../../fact-components/Title/Title'
import Countdown from '../../fact-components/Countdown/Countdown'
import Fact from '../../fact-components/Fact/Fact'

export default function ChooseFalseFact({
    roundNumber,
    displayName,
    facts,
    handleAnswer,
    secondsLeft,
    turnId,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber="1" />
                <Title text="Which is Khang's truthy?" />
                <Countdown secondsLeft="10" />
                <div className={styles.factContainer}>
                    <Fact
                        factText={`I hate cake very very much and can't even stand to be near it`}
                        // selected={selected}
                        // handleClick={handleClick}
                    />
                    <Fact
                        factText={
                            'I once a skydive and my parachute failed but luckily a large bird saved me'
                        }
                        // selected={selected}
                        // handleClick={handleClick}
                    />
                </div>
            </main>
        </>
    )
}
