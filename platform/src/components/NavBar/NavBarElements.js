import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import userIcon from '../../Images_2/userIcon.png'

export const Nav = styled.nav`
    background: #434343;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    z-index: 10;
    justify-content: flex-start;
`

export const NavLink = styled(Link)`
    color: #ebebeb;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 0.7;
    }
    ${'' /* &.active {
        text-decoration: underline;
    } */}
`

export const NavMenu = styled.div`
    font-family: 'Sen';
    font-size: 1.8vw;
    height: auto;
    display: flex;
    align-items: center;
    margin-right: -24px;
    width: 100vw;
    white-space: nowrap;
`
export const NavBtn = styled.nav`
    font-family: 'Sen';
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 100vw;
`

export const NavBtnLink = styled(Link)`
    border-radius: 50%;
    height: 6vh;
    width: 3.4vw;
    background: #256ce1;
    background-image: url(${userIcon});
    background-position: center;
    background-size: cover;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 0.7;
    }
`
