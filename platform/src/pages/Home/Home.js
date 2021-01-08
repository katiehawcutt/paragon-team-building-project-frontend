import React from 'react'
import styles from './Home.module.css'
import Background from '../../components/Background/Background'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import WelcomeText from '../../components/WelcomeText/WelcomeText'
import Carousel1 from '../../components/Carousel/Carousel'
import HomeImg from '../../Images_2/team-building-activities-banner.png'



function Home() {
    const factGameLink = 'https://the-fact-game.netlify.app'

    const bio =
        'This site is build with the primary objective of building teams, small and large, through the  medium of games. We have curated a list of the best games to harness an inclusive environment and build rapport. Check out our bespoke facts  game by clicking the link below!'

    return (
        <div className={styles.home_container}>
            <div className={styles.text_container}>
                <h1 className={styles.title}>Welcome Bootcampers!</h1>
                <p className={styles.bio_section}>{bio}</p>
                <div className={styles.button_container}>
                    <Button text="Play Now!" link={factGameLink} />
                </div>
            </div>
            <img src={HomeImg} />
        </div>
    )
}

export default Home
