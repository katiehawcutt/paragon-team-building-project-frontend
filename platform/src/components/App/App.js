import React from 'react'
import '../../globals/global.css'

import { BrowserRouter as Router, Switch } from 'react-router-dom'

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
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/teambuilding" component={Games} />
                    <PrivateRoute path="/profiles" component={Profiles} />
                </Switch>
            </Router>
        </>
    )
}

export default App
