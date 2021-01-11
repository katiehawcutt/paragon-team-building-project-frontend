import React from 'react'

import RevealTimer from '../../components/RevealTimer/RevealTimer'

export default function RevealWhoTimer({ roundNumber, secondsLeft }) {
    return (
        <RevealTimer
            title={'The facts belong to...'}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
