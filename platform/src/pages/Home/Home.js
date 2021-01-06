import React from 'react'
import styles from './Home.module.css'
import Background from '../../components/Background/Background'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import WelcomeText from '../../components/WelcomeText/WelcomeText'

function Home() {
    return (
        <div className={styles.home_container}>
            <Background />
            
            <h1 className={styles.title}>Facts</h1>
            <div className={styles.button_container}>
                <Button text="Play Now!" />
            </div>
            <h2 className={styles.subtitle}>About</h2>
            <div className={styles.underline}></div>
            <div className={styles.text_container}>
                <WelcomeText />
            </div>
            
        </div>
    )
}

export default Home
