import React from 'react'
import styles from './LoginButton.module.css'
import { Link } from 'react-router-dom'

function LoginButton({ text }) {
    return (
        <Link to="/login" className={styles.link}>
            <button className={styles.button}>{text}</button>
        </Link>
    )
}

export default LoginButton
