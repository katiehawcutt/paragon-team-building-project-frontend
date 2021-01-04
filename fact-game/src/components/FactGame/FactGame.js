import React from 'react'
import WhoseFact from '../_WhoseFact/WhoseFact'
import CountDownTimer from '../_CountDownTimer/CountDownTimer'
import WhoseFactReveal from '../_WhoseFactReveal/WhoseFactReveal'
import ChooseFalseFact from '../_ChooseFalseFact/ChooseFalseFact'
import FalseFactReveal from '../_FalseFactReveal/FalseFactReveal'
import FinalPage from '../_FinalPage/FinalPage'

const eventToComponentMap = {
    // TODO: GAME_STARTED
    GUESS_WHO_TIMER: WhoseFact,
    REVEAL_WHO_TIMER: CountDownTimer,
    REVEAL_WHO: WhoseFactReveal,
    GUESS_FAKE_FACT_TIMER: ChooseFalseFact,
    REVEAL_FAKE_FACT_TIMER: CountDownTimer,
    REVEAL_FAKE_FACT: FalseFactReveal,
    PODIUM: FinalPage,
}

export default function FactGame({ action, otherProps, handleAnswer }) {
    const ComponentToLoad = eventToComponentMap[action]
    const combinedProps = { ...otherProps, handleAnswer }

    if (ComponentToLoad) {
        return <ComponentToLoad {...combinedProps} />
    }

    return <p>Unimplemented event {action}</p>
}
