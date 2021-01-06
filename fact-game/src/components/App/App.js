import '../../globals/global.css'

import Home from '../../pages/Home/Home'
import FactGame from '../FactGame/FactGame'
import { WEBSOCKET_URL } from '../../constants/websocket'

import useFactsGame from '../../hooks/useFactsGame'
import * as messageHandlers from '../../messageHandlers/messageHandlers'

export default function App() {
    const factsGame = useFactsGame({
        webSocketUrl: WEBSOCKET_URL,
        messageHandlers,
    })

    console.log(factsGame)

    if (factsGame.game.error) {
        return <p>An error occcurred, please try again later.</p>
    }

    if (!factsGame.game.created) {
        return (
            <Home
                handleCreate={factsGame.createAndJoinGame}
                handleJoin={factsGame.joinExistingGame}
            />
        )
    }

    return (
        <div>
            <FactGame
                action={factsGame.currentStageInGame.action}
                otherProps={factsGame.currentStageInGame.otherProps}
                handleAnswer={factsGame.sendAnswer}
            />
        </div>
    )
}
