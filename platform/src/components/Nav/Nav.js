import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styles from './Nav.module.css'
import Menu from '../Menu/Menu'
import image from '../../Images_2/userIcon.png'

function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img
                    className={styles.socLogo}
                    src="./Images/SoCLogo.png"
                    alt="School of Code logo"
                />
                <p className={styles.schoolOfCodeWords}>school of code</p>
            </div>
            <div className={styles.navContainer}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.navLink}>
                            home
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            to="/games"
                            className={styles.navLink}
                            activeClassName={styles.activeLink}
                        >
                            games
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            to="/profiles"
                            className={styles.navLink}
                            activeClassName={styles.activeLink}
                        >
                            profiles
                        </Link>
                    </li>
                </ul>
                <Menu image={image} /> {/* //Image retrieved from backend */}
                {/* <button className={styles.userButton}>
                    <img className={styles.userPhoto} src="./Images/kh.png" />
                </button> */}
            </div>
        </nav>
    )
}

export default Nav
