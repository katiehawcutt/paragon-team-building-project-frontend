import React from 'react'
import RevealTimer from '../../components/RevealTimer/RevealTimer'

export default function RevealWhoTimer({ roundNumber, secondsLeft }) {
    return (
        <RevealTimer
            title={'Whose facts were they?'}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
