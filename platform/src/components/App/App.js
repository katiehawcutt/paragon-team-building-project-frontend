import React from 'react'
import '../../globals/global.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Games from '../../pages/Games/Games'
import Profiles from '../../pages/Profiles/Profiles'
import Nav from '../Nav/Nav'
import { PrivateRoute } from '../PrivateRoute'

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <PrivateRoute path="/games" component={Games} />

                    <Route path="/profiles">
                        <Profiles />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
