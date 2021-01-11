import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App/App'
import { ChakraProvider } from '@chakra-ui/react'

import { PrivateRoute } from './components/PrivateRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HandleLogin } from './components/HandleLogin'
import { HandleLogout } from './components/HandleLogout'
import { UserContextProvider } from './contexts/User'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <UserContextProvider>
                {/* TODO: Stick everything inside the UserContextProvider in its own component? AppRouter? */}
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <HandleLogin />
                        </Route>
                        <Route path="/after-logout">
                            <HandleLogout />
                        </Route>
                        <PrivateRoute component={App} path="/" exact />
                    </Switch>
                </BrowserRouter>
            </UserContextProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
