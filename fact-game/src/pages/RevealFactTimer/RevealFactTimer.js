import React from 'react'
import RevealTimer from '../../components/RevealTimer/RevealTimer'

export default function RevealFactTimer({
    displayName,
    roundNumber,
    secondsLeft,
}) {
    return (
        <RevealTimer
            title={`${displayName}'s fake fact is...`}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
