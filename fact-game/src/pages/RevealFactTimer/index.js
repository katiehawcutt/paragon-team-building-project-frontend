import React, { useEffect } from 'react'

import useSound from 'use-sound'
import alert from '../../sounds/alert.mp3'

import RevealTimer from '../../components/RevealTimer'

export default function RevealFactTimer({
    displayName,
    roundNumber,
    secondsLeft,
}) {
    const [alertSound, { stop }] = useSound(alert)

    useEffect(() => {
        const timeoutId = setTimeout(alertSound, 200)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [alertSound, stop])
    return (
        <RevealTimer
            title={`${displayName}'s true fact is...`}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        />
    )
}
