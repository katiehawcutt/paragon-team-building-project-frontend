import useWebSocket from 'react-use-websocket'
import useMessageReducer from './useMessageReducer'

const tryToParseJson = (json) => {
    try {
        return { parsed: JSON.parse(json) }
    } catch (err) {
        return { parsingError: err.message }
    }
}

export default function useFactsGame({
    webSocketUrl,
    accessToken,
    shouldConnect = true,
}) {
    /**
     * Build custom hook on top of hook.
     */
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(
        webSocketUrl,
        {
            protocols: ['default', accessToken],
            retryOnError: true,
            shouldReconnect: () => true,
            reconnectInterval: 1000,
            onMessage(event) {
                /**
                 * Try to parse and log message.
                 *
                 * Actual message handling will be done by useMessageReducer hook.
                 */
                const { parsed, parsingError } = tryToParseJson(event.data)
                if (parsingError) {
                    console.error(parsingError)
                } else {
                    console.log('Received from server', parsed)
                }
            },
        },
        shouldConnect
    )

    /**
     * Custom hook for flexibly updating state in response to received messages.
     */
    const gameState = useMessageReducer({ lastMessage: lastJsonMessage })

    return {
        ...gameState,
        createAndJoinGame({ displayName, fact, lie, playerId, rounds }) {
            sendJsonMessage({
                action: 'CREATE_AND_JOIN_GAME',
                rounds,
                player: { displayName, fact, lie, playerId },
            })
        },
        joinExistingGame({ gameId, displayName, fact, lie, playerId }) {
            sendJsonMessage({
                action: 'JOIN_GAME',
                gameId,
                player: { displayName, fact, lie, playerId },
            })
        },
        startGame({ gameId, playerId }) {
            if (!gameState.isCreator) {
                return console.log('Game not started')
            }
            sendJsonMessage({
                action: 'START_GAME',
                playerId,
                gameId,
            })
        },
        sendAnswer({ choice, playerId }) {
            sendJsonMessage({
                action: 'ANSWER',
                gameId: gameState.gameId,
                playerId: playerId, // ID of the player that's answering
                choice,
            })
        },
    }
}
