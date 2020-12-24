import './App.css'
import CreateNewGame from './fact-components/CreateNewGame'
import HomePage from './fact-components/HomePage'
import EnterFactPage from './fact-components/EnterFactPage'
import WhoseFactReveal from './fact-components/WhoseFactReveal'
import ChooseFalseFact from './fact-components/ChooseFalseFact'
import FalseFactReveal from './fact-components/FalseFactReveal'

function App() {
    return (
        <div className="App">
            {/* <HomePage /> */}
            {/* <CreateNewGame /> */}
            {/* <EnterFactPage /> */}
            {/* <CountDownTimer /> */}
            {/* <WhoseFactReveal /> */}
            {/* <ChooseFalseFact /> */}
            <FalseFactReveal />
        </div>
    )
}

export default App
