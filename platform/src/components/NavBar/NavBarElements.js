import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import UserImg from '../../Images/userIcon.png'

export const Nav = styled.nav`
    background: #434343;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
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
    &.active {
        text-decoration: underline;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    width: 100vw;
    white-space: nowrap;
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    background-image: url(${UserImg});
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
