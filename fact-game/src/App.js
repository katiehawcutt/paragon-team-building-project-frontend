import './App.css'
import CreateNewGame from './fact-components/CreateNewGame'
import HomePage from './fact-components/HomePage'
import EnterFactPage from './fact-components/EnterFactPage'
import WhoseFactReveal from './fact-components/WhoseFactReveal'
import ChooseFalseFact from './fact-components/ChooseFalseFact'
import FalseFactReveal from './fact-components/FalseFactReveal'
import FinalPage from './fact-components/FinalPage'
import FactGame from './fact-components/FactGame'

import useFactsGame from './hooks-folder/UseFactsGame'
import * as messageHandlers from './messageHandlers/messageHandlers'

function App() {
    const factsGame = useFactsGame({
        webSocketUrl: 'ws://localhost:8080',
        messageHandlers,
    })

    if (factsGame.game.error) {
        return <p>An error occcurred, please try again later.</p>
    }

    if (!factsGame.game.started) {
        return (
            // Need to show create game/join game

            <CreateNewGame handleClick={factsGame.createAndJoinGame} />

            // <StartFactsGame
            //     handleClick={factsGame.createAndJoinGame}
            //     requestSent={factsGame.game.requestSent}
            //     responseReceived={factsGame.game.responseReceived}
            // />
        )
    }

    return (
        <div className="App">
            {/* <HomePage /> */}
            <FactGame
                action={factsGame.currentStageInGame.action}
                otherProps={factsGame.currentStageInGame.otherProps}
                handleAnswer={factsGame.sendJsonMessage}
            />
            {/* <CreateNewGame /> */}
            {/* <EnterFactPage /> */}
            {/* <CountDownTimer /> */}
            {/* <WhoseFactReveal /> */}
            {/* <ChooseFalseFact /> */}
            {/* <FalseFactReveal /> */}
            {/* <FinalPage /> */}
        </div>
    )
}

export default App
//c
