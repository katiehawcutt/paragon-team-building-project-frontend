import { useState } from 'react'
import useWebSocket from 'react-use-websocket'

const tryToParseJson = (json) => {
    try {
        return { parsed: JSON.parse(json) }
    } catch (err) {
        return { parsingError: err.message }
    }
}

export default function useFactsGame({ webSocketUrl, messageHandlers }) {
    /**
     * A bit of state for when the player's not yet joined a game.
     */
    const [game, setGame] = useState({
        error: null,
        started: false,
        gameId: null,
        requestSent: false,
        responseReceived: false,
    })

    /**
     * Build custom hook on top of hook.
     */
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(webSocketUrl, {
        retryOnError: true,
        shouldReconnect: (e) => e.di,
        onOpen(event) {
            console.log('Opened web socket connection', event)
        },
        onMessage(event) {
            /**
             * Try to parse message. If there's an error, log and return early.
             */
            const { parsed, parsingError } = tryToParseJson(event.data)
            if (parsingError) {
                return console.error(parsingError)
            }

            console.log('Received from server', parsed)

            /**
             * Call handler with try-catch.
             */
            const handler =
                messageHandlers[parsed.action] ?? messageHandlers.$default
            try {
                handler({ data: parsed, setGame, sendJsonMessage })
            } catch (err) {
                console.error(err)
            }
        },
    })

    const { action, ...otherProps } = lastJsonMessage ?? {}

    return {
        game,
        currentStageInGame: {
            action,
            otherProps,
        },
        createAndJoinGame({ displayName, fact, lie, playerId }) {
            sendJsonMessage({
                action: 'CREATE_AND_JOIN_GAME',
                player: { displayName, fact, lie, playerId },
            })
            setGame((prev) => ({ ...prev, requestSent: true }))
        },
        joinExistingGame({ gameId, displayName, fact, lie }) {
            sendJsonMessage({
                action: 'JOIN_GAME',
                gameId,
                player: { displayName, fact, lie },
            })
            setGame((prev) => ({ ...prev, requestSent: true }))
        },
        sendAnswer({ choice }) {
            sendJsonMessage({
                action: 'ANSWER',
                gameId: game.gameId,
                playerId: '9b02d6d5-e812-4fda-999c-5625b87c62cc', // ID of the player that's answering, not the ID of who the fact is about
                choice,
            })
        },
    }
}
