import React from 'react'

import RevealTimer from '../../components/RevealTimer/RevealTimer'

export default function RevealWhoTimer({ roundNumber, secondsLeft }) {
    return (
        <RevealTimer
            title={'These facts belonged to...'}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
