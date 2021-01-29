import React from 'react'
import '../../globals/global.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import TeamBuilding from '../../pages/TeamBuilding'
import Profiles from '../../pages/Profiles'
import { HandleLogin } from '../HandleLogin'
import { HandleLogout } from '../HandleLogout'

import Nav from '../Nav'
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
                    <TeamBuilding />
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
