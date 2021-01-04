import '../../globals/global.css'

import css from './App.module.css'
import CreateNewGame from '../_CreateNewGame/CreateNewGame'
import FactGame from '../FactGame/FactGame'

import useFactsGame from '../../hooks/useFactsGame'
import * as messageHandlers from '../../messageHandlers/messageHandlers'

export default function App() {
    const factsGame = useFactsGame({
        webSocketUrl: 'ws://localhost:8080',
        messageHandlers,
    })

    if (factsGame.game.error) {
        return <p>An error occcurred, please try again later.</p>
    }

    if (!factsGame.game.started) {
        return <CreateNewGame handleClick={factsGame.createAndJoinGame} />
    }

    return (
        <div className={css.App}>
            <FactGame
                action={factsGame.currentStageInGame.action}
                otherProps={factsGame.currentStageInGame.otherProps}
                handleAnswer={factsGame.sendAnswer}
            />
        </div>
    )
}
