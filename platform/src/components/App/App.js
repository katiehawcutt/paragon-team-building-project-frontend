import React from 'react'
import '../../globals/global.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Games from '../../pages/Games/Games'
import Profiles from '../../pages/Profiles/Profiles'
import { HandleLogin } from '../HandleLogin'
import { HandleLogout } from '../HandleLogout'

import Nav from '../Nav/Nav'
import { PrivateRoute } from '../PrivateRoute'

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/login">
                    <HandleLogin />
                </Route>
                <Route path="/after-logout">
                    <HandleLogout />
                </Route>
                <Route path="/teambuilding">
                    <Games />
                </Route>
                <PrivateRoute path="/profiles" exact component={Profiles} />
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
