import useFactsGame from '../hooks-folder/UseFactsGame'
import React from 'react'
import Homepage from './HomePage'
import CreateNewGame from './CreateNewGame'

import WhoseFact from './WhoseFact'
import CountDownTimer from './CountDownTimer'
import WhoseFactReveal from './WhoseFactReveal'
import ChooseFalseFact from './ChooseFalseFact'
import FalseFactReveal from './FalseFactReveal'
import FinalPage from './FinalPage'

const eventToComponentMap = {
    // TODO: GAME_STARTED
    GUESS_WHO_TIMER: WhoseFact,
    // BACK END TODO: GUESS_WHO_CHOICE
    REVEAL_WHO_TIMER: CountDownTimer,
    REVEAL_WHO: WhoseFactReveal,
    // Team 1 work above.
    // ==============================================
    // Team 2 work below
    GUESS_FAKE_FACT_TIMER: ChooseFalseFact,
    // BACK END GUESS_FAKE_FACT_CHOICE: GuessFakeFactChoice
    REVEAL_FAKE_FACT_TIMER: CountDownTimer,
    REVEAL_FAKE_FACT: FalseFactReveal,
    PODIUM: FinalPage,
}

function FactGame({ action, otherProps }) {
    const ComponentToLoad = eventToComponentMap[action]

    if (ComponentToLoad) {
        return <ComponentToLoad {...otherProps} />
    }

    return <p>Unimplemented event {action}</p>

    // The component that needs to be loaded in response to the server's data.
}

export default FactGame
