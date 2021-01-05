import React from 'react'
import styles from './WelcomeText.module.css'

function WelcomeText({ text }) {
    return (
        <div>
            <p className={styles.welcomeText}>{text}</p>
        </div>
    )
}

export default WelcomeText
