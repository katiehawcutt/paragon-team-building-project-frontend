import { useState, useEffect } from 'react'
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
        created: false,
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

    //Keep track of last message that isn't action:ANSWER
    //If the last message has an action of ANSWER we want to update the currentSubmittedAnswer property within the object returned from the useFacts game
    // If not, continue doing what we're doing - destructure action and props from lastJsonMesaage

    const [lastNonAnswerMessage, setLastNonAnswerMessage] = useState()

    const [lastAnswerMessage, setLastAnswerMessage] = useState()

    useEffect(() => {
        if (lastJsonMessage?.action === 'ANSWER') {
            setLastAnswerMessage(lastJsonMessage)
        } else {
            setLastNonAnswerMessage(lastJsonMessage)
        }
    }, [lastJsonMessage])

    const { action, ...otherProps } = lastNonAnswerMessage ?? {}

    return {
        game,
        currentStageInGame: {
            action,
            otherProps: {
                ...otherProps,
                currentChoiceId: lastAnswerMessage?.choice,
            },
        },

        createAndJoinGame({ displayName, fact, lie, playerId, rounds }) {
            sendJsonMessage({
                action: 'CREATE_AND_JOIN_GAME',
                rounds,
                player: { displayName, fact, lie, playerId },
            })
            setGame((prev) => ({ ...prev, requestSent: true }))
        },
        joinExistingGame({ gameId, displayName, fact, lie, playerId }) {
            sendJsonMessage({
                action: 'JOIN_GAME',
                gameId,
                player: { displayName, fact, lie, playerId },
            })
            setGame((prev) => ({ ...prev, requestSent: true }))
        },
        sendAnswer({ choice, playerId }) {
            sendJsonMessage({
                action: 'ANSWER',
                gameId: game.gameId,
                playerId: playerId, // ID of the player that's answering
                choice,
            })
        },
    }
}
