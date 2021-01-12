import React from 'react'

import RevealTimer from '../../components/RevealTimer'

export default function RevealFactTimer({
    displayName,
    roundNumber,
    secondsLeft,
}) {
    return (
        <RevealTimer
            title={`${displayName}'s true fact is...`}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
