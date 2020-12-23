import './App.css'
import CreateNewGame from './fact-components/CreateNewGame'
import HomePage from './fact-components/HomePage'
import EnterFactPage from './fact-components/EnterFactPage'
// import CountDownTimer from './fact-components/CountDownTimer'

function App() {
    return (
        <div className="App">
            {/* <HomePage /> */}
            {/* <CreateNewGame /> */}
            <EnterFactPage />
            {/* <CountDownTimer /> */}
        </div>
    )
}

export default App
