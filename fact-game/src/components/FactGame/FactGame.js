import React from 'react'
import GameLobby from '../../pages/GameLobby/GameLobby'
import WhoseFact from '../../pages/WhoseFact/WhoseFact'
// import AnswerSubmitted from '../AnswerSubmitted/AnswerSubmitted'
import RevealFactTimer from '../../pages/RevealFactTimer/RevealFactTimer'
import RevealWhoTimer from '../../pages/RevealWhoTimer/RevealWhoTimer'
import WhoseFactReveal from '../../pages/WhoseFactReveal/WhoseFactReveal'
import ChooseFalseFact from '../../pages/ChooseFalseFact/ChooseFalseFact'
import FalseFactReveal from '../../pages/FalseFactReveal/FalseFactReveal'
import Podium from '../../pages/Podium/Podium'

const eventToComponentMap = {
    LOBBY: GameLobby,
    GAME_STARTED: GameLobby, //Game is starting screen
    GUESS_WHO_TIMER: WhoseFact,
    // ANSWER: AnswerSubmitted,
    REVEAL_WHO_TIMER: RevealWhoTimer,
    REVEAL_WHO: WhoseFactReveal,
    GUESS_FAKE_FACT_TIMER: ChooseFalseFact,
    REVEAL_FAKE_FACT_TIMER: RevealFactTimer,
    // ANSWER: AnswerSubmitted,
    REVEAL_FAKE_FACT: FalseFactReveal,
    PODIUM: Podium,
}

export default function FactGame({ action, otherProps, handleAnswer }) {
    const ComponentToLoad = eventToComponentMap[action]
    const combinedProps = { ...otherProps, handleAnswer }

    console.log('rendered FactGame')

    if (ComponentToLoad) {
        return <ComponentToLoad {...combinedProps} />
    }

    return <p>Unimplemented event {action}</p>
}
