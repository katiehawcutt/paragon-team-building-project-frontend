import React from 'react'
import styles from './Home.module.css'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'

import { LINK_TO_FACTS } from '../../constants/externalUrls'

function Home() {
    const buttonColor = '#FE4042'

    const intro1 = ` At School Of Code we believe that tech is a team sport and we like to introduce
    our bootcampers to the practice of pair-programming and working in diverse teams from day one. 
    Since our bootcamp is now fully remote it's more important than ever that our teams feel 
    connected and able to build rapport, whilst solving problems effectively in a supportive 
    environment.`

    const intro2 = `To reinforce this idea we built a team building platform that hosts a variety 
    of activities that promote engagement and encourage a positive working model. 
    We even built a bespoke game from a highly requested energiser from Cohort 4 that allows 
    users to get to know a little more about their colleagues. 
    Check it out by clicking the link below!`

    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.text_container}>
                    <Title
                        text="Welcome Bootcampers!"
                        className={styles.title}
                    />
                    <p className={styles.intro_section}>{intro1}</p>
                    <p className={styles.intro_section}>{intro2}</p>
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
                    src="./Images/homepage-picture.png"
                    alt="group of people working together"
                />
            </div>
        </>
    )
}

export default Home
