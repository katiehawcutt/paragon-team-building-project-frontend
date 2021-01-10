import React from 'react'
import styles from './Games.module.css'
import GameCard from '../../components/GameCard/GameCard'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import Background from '../../components/Background/Background'
import amongUs from '../../Images_2/amongUs.png'
import gartic from '../../Images_2/garticImg.png'
import scattergories from '../../Images_2/scattegoriesImg.png'
import banner2 from '../../Images_2/banner2.jpg'
import teamBuildingBanner from '../../Images_2/team-building.jpg'

function Games() {
    const factGameLink = 'https://the-fact-game.netlify.app'

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.title}>
                    <Title text={'Team Building'} />
                </div>
                <div className={styles.banner}>
                    <Background image={teamBuildingBanner} />
                </div>
                <div className={styles.subTitle}>
                    <Subtitle text={'Select Your Game'} />
                </div>
                <div className={styles.gameCardContainer}>
                    <GameCard
                        text={'Facts!'}
                        description={
                            'We want FACTS! Learn more about your fellow bootcampers'
                        }
                        image={banner2}
                        link={factGameLink}
                    />
                    <GameCard
                        text={'Gartic'}
                        description={
                            'One person draws and everyone else guesses'
                        }
                        image={gartic}
                    />
                    <GameCard
                        text={'Among Us'}
                        description={
                            'Catch the imposters before they murder the crewmates'
                        }
                        image={amongUs}
                    />
                    <GameCard
                        text={'Scattergories'}
                        description={
                            'Create a list of words with the descriptions and a Random letter, point for every unique answer'
                        }
                        image={scattergories}
                    />
                </div>
            </div>
        </>
    )
}

export default Games
