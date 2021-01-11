import '../../globals/global.css'

import Home from '../../pages/Home/Home'
import FactGame from '../FactGame/FactGame'
import { WEBSOCKET_URL } from '../../constants/websocket'

import useFactsGame from '../../hooks/useFactsGame'

export default function App() {
    const factsGame = useFactsGame({
        webSocketUrl: WEBSOCKET_URL,
    })

    if (factsGame.unknownError) {
        return <p>An unknown error occcurred, please try again later.</p>
    }

    if (
        (factsGame.gameCreated || factsGame.gameJoined) &&
        factsGame.ComponentToRender
    ) {
        return (
            <FactGame
                ComponentToRender={factsGame.ComponentToRender}
                renderProps={factsGame.renderProps}
                handleAnswer={factsGame.sendAnswer}
                gameState={factsGame}
            />
        )
    }

    return (
        <Home
            handleCreate={factsGame.createAndJoinGame}
            handleJoin={factsGame.joinExistingGame}
            gameNotCreatedError={factsGame.gameNotCreatedError}
            gameNotJoinedError={factsGame.gameNotJoinedError}
        />
    )
}
