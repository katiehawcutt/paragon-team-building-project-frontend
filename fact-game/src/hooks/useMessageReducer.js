import { useReducer, useEffect } from 'react'

import { actionTypes } from '../constants/messageReducerActions'
import { messageReducer } from '../reducers/messageReducer'

import GameLobby from '../pages/GameLobby/GameLobby'
import GameStarting from '../pages/GameStarting/GameStarting'
import WhoseFact from '../pages/WhoseFact/WhoseFact'
import RevealFactTimer from '../pages/RevealFactTimer/RevealFactTimer'
import RevealWhoTimer from '../pages/RevealWhoTimer/RevealWhoTimer'
import WhoseFactReveal from '../pages/WhoseFactReveal/WhoseFactReveal'
import ChooseFalseFact from '../pages/ChooseFalseFact/ChooseFalseFact'
import FalseFactReveal from '../pages/FalseFactReveal/FalseFactReveal'
import Podium from '../pages/Podium/Podium'

export const eventToComponentMap = {
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

const initialMessageState = {
    unknownError: false,
    gameNotCreatedError: false,
    gameNotJoinedError: false,
    gameNotStartedError: false,
    answerNotUpdatedError: false,
    gameCreated: false,
    gameJoined: false,
    gameId: null,
    currentChoiceId: null,
    ComponentToRender: null,
    renderProps: {},
}

/**
 * Custom hook that takes in messages and updates game state in finite ways.
 */
export default function useMessageReducer({ lastMessage }) {
    const [state, dispatch] = useReducer(messageReducer, initialMessageState)

    const { action, ...properties } = lastMessage ?? {}

    const ComponentToRender = eventToComponentMap[action]

    useEffect(() => {
        if (ComponentToRender) {
            dispatch({
                type: actionTypes.SET_COMPONENT_TO_RENDER,
                payload: {
                    ComponentToRender,
                    renderProps: properties,
                },
            })
        } else if (action) {
            dispatch({
                type: action,
                payload: properties,
            })
        }
    }, [lastMessage])

    return state
}
