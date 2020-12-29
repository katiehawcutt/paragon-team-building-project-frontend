import useWebSocket, { ReadyState } from 'react-use-websocket'

export default function useFactsGame() {
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(
        'ws://localhost:8080',
        {
            onMessage(event) {
                console.log(event)
            },
        }
    )
    return {
        sendJsonMessage,
        lastJsonMessage,
        createNewGame({ displayName, fact, lie, playerId }) {
            console.log('create new game triggered')
            sendJsonMessage({
                action: 'CREATE_AND_JOIN_GAME',
                player: { displayName, fact, lie, playerId },
            })
        },
    }
}
