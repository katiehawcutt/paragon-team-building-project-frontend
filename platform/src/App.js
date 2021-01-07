import React from 'react'
import './App.css'
import GlobalFonts from './fonts/fonts'
import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Games from './pages/Games/Games'
import Cohort from './pages/Cohort/Cohort'
import Profile from './pages/Profile/Profile'

function App() {
    return (
        <>
            <GlobalFonts />
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Games" component={Games} />
                    <Route path="/Cohort" component={Cohort} />
                    <Route path="/Profile" component={Profile} />
                </Switch>
            </Router>
        </>
    )
}

export default App
