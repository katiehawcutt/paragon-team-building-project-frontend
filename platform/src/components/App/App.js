import React from 'react'
import '../../globals/global.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Games from '../../pages/Games/Games'
import Profile from '../../pages/Profile/Profile'
import Nav from '../Nav/Nav'

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/Games">
                        <Games />
                    </Route>
                    <Route path="/Profile">
                        <Profile />
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
