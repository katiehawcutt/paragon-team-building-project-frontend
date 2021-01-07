import React from 'react'
// import UserPic from '../UserPic/UserPic'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

export default function NavBar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img
                        src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                        alt="School of Code logo"
                        style={{ maxWidth: '60px', maxHeight: 'auto' }}
                    />
                </NavLink>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Games" activeStyle>
                        Games
                    </NavLink>
                    <NavLink to="/Cohort" activeStyle>
                        Cohort
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Profile"></NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}
