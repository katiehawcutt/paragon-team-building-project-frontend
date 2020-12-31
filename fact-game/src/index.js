import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './fact-components/App/App'

import { UserContextProvider } from './contexts/User'

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
