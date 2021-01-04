import React from 'react'
import styles from './WhoseFact.module.css'
import Header from '../../fact-components/Header/Header'
import Round from '../../fact-components/Round/Round'
import Title from '../../fact-components/Title/Title'
import Countdown from '../../fact-components/Countdown/Countdown'
import DisplayFact from '../../fact-components/DisplayFact/DisplayFact'

const people = [
    'Katie',
    'Natalie',
    'Bradley',
    'Khang',
    'Arshi',
    'Amelia',
    'Jon',
    'Stefan',
    'Ann-Marie',
    'Jeremy',
    'Patrick',
    'Anna',
    'Tommy',
]

export default function WhoseFact({
    roundNumber,
    facts,
    participants,
    secondsLeft,
    handleAnswer,
    turnId,
}) {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Round roundNumber="1" />
                <Title text="Whose Facts?" />
                <Countdown secondsLeft={20} />
                <div className={styles.factContainer}>
                    <DisplayFact
                        facts={[
                            `I hate cake very very much and can't even stand to be near it`,
                            'I once a skydive and my parachute failed but luckily a large bird saved me',
                        ]}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    {people.map((participant) => {
                        return (
                            <button
                                className={styles.nameButton}
                                key={participant.choiceId}
                                onClick={() =>
                                    handleAnswer({
                                        choice: participant.choiceId,
                                    })
                                }
                                //toggle background color green for selected button
                            >
                                {participant}
                                {/* {participant.text} */}
                            </button>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
