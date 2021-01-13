import '../../globals/global.css'

import Home from '../../pages/Home'
import FactGame from '../FactGame'
import ErrorMessage from '../../pages/ErrorMessage'

import { WEBSOCKET_URL } from '../../constants/websocket'

import useFactsGame from '../../hooks/useFactsGame'
import { useUserContext } from '../../contexts/User'

export default function App() {
    const { user } = useUserContext()

    const factsGame = useFactsGame({
        webSocketUrl: WEBSOCKET_URL,
        accessToken: user.access_token,
    })

    if (factsGame.unknownError) {
        return <ErrorMessage />
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
