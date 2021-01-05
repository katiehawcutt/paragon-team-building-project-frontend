import React from 'react'
import ReactDOM from 'react-dom'

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css'
import App from './components/App/App'
import { HandleLogin } from './components/HandleLogin/HandleLogin'
import { UserContextProvider } from './contexts/User'

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <HandleLogin />
                    </Route>
                    <PrivateRoute component={App} path="/" exact />
                </Switch>
            </BrowserRouter>
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
