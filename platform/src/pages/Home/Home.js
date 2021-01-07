import React from 'react'
import styles from './Home.module.css'
import Background from '../../components/Background/Background'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import WelcomeText from '../../components/WelcomeText/WelcomeText'
// import Carousel1 from '../../components/Carousel/Carousel'
import bgImg from '../../Images_2/game-controller-bg.png'
import NavBar from '../../components/NavBar/NavBar'

function Home() {
    const factGameLink = 'https://gartic.io/' //Replace with fact game***

    return (
        <div className={styles.home_container}>
            <Background image={bgImg} />

            <h1 className={styles.title}>Facts</h1>
            <div className={styles.button_container}>
                <Button text="Play Now!" link={factGameLink} />
            </div>
            <h2 className={styles.subtitle}>About</h2>
            <div className={styles.underline}></div>
            <div className={styles.text_container}>
                <WelcomeText />
            </div>
            {/* <Carousel1 /> */}
        </div>
    )
}

export default Home

/* 
Homepage Plan:
Add linear gradient with opacity??
Add navbar

*/
