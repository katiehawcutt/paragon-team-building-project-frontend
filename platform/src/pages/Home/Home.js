import React from 'react'
import styles from './Home.module.css'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import HomeImg from '../../Images_2/homepage-picture.png'

import { LINK_TO_FACTS } from '../../constants/externalUrls'

function Home() {
    const buttonColor = '#FE4042'

    const bio =
        'This site is build with the primary objective of building teams, small and large, through the  medium of games. We have curated a list of the best games to harness an inclusive environment and build rapport. Check out our bespoke facts  game by clicking the link below!'

    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.text_container}>
                    <Title
                        text="Welcome Bootcampers!"
                        className={styles.title}
                    />
                    <p className={styles.bio_section}>{bio}</p>
                    <div className={styles.button_container}>
                        <Button
                            text="Play Now"
                            color={buttonColor}
                            link={LINK_TO_FACTS}
                        />
                    </div>
                </div>
                <img
                    className={styles.homeImg}
                    src={HomeImg}
                    alt="group of people working together"
                />
            </div>
        </>
    )
}

export default Home
