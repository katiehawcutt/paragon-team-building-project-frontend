import React from 'react'
import GameLobby from '../../pages/GameLobby/GameLobby'
import GameStarting from '../../pages/GameStarting/GameStarting'
import WhoseFact from '../../pages/WhoseFact/WhoseFact'
import RevealFactTimer from '../../pages/RevealFactTimer/RevealFactTimer'
import RevealWhoTimer from '../../pages/RevealWhoTimer/RevealWhoTimer'
import WhoseFactReveal from '../../pages/WhoseFactReveal/WhoseFactReveal'
import ChooseFalseFact from '../../pages/ChooseFalseFact/ChooseFalseFact'
import FalseFactReveal from '../../pages/FalseFactReveal/FalseFactReveal'
import Podium from '../../pages/Podium/Podium'

const eventToComponentMap = {
    LOBBY: GameLobby,
    GAME_STARTED: GameStarting,
    GUESS_WHO_TIMER: WhoseFact,
    REVEAL_WHO_TIMER: RevealWhoTimer,
    REVEAL_WHO: WhoseFactReveal,
    GUESS_FAKE_FACT_TIMER: ChooseFalseFact,
    REVEAL_FAKE_FACT_TIMER: RevealFactTimer,
    REVEAL_FAKE_FACT: FalseFactReveal,
    PODIUM: Podium,
}

export default function FactGame({ action, otherProps, handleAnswer }) {
    const ComponentToLoad = eventToComponentMap[action]
    const combinedProps = { ...otherProps, handleAnswer }

    if (ComponentToLoad) {
        return <ComponentToLoad {...combinedProps} />
    }

    return <p>Unimplemented event {action}</p>
}
