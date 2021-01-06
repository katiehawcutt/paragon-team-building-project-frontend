import React from 'react'
import styles from './WelcomeText.module.css'

function WelcomeText({ text }) {
    return (
        <div>
            <p className={styles.welcomeText}>
                Welcome to the gaming platform bootcamper! Here you will find an
                assortment of games catering to all!
            </p>
        </div>
    )
}

export default WelcomeText
