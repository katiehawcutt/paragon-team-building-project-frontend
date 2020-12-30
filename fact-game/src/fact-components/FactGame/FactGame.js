import React from 'react'
import WhoseFact from '../WhoseFact/WhoseFact'
import CountDownTimer from '../CountDownTimer/CountDownTimer'
import WhoseFactReveal from '../WhoseFactReveal/WhoseFactReveal'
import ChooseFalseFact from '../ChooseFalseFact/ChooseFalseFact'
import FalseFactReveal from '../FalseFactReveal/FalseFactReveal'
import FinalPage from '../FinalPage/FinalPage'

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
