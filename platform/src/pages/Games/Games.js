import React from 'react'
import styles from './Games.module.css'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard/GameCard'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
// import amongUs from './Images_2/amongUs.png'
import gartic from '../../Images_2/garticImg.png'
import scattergories from '../../Images_2/scattegoriesImg.png'
import banner2 from '../../Images_2/banner2.jpg'
import teamBuildingBanner from '../../Images_2/team-building.jpg'
import codenames from '../../Images_2/codenames.jpg'
import mafia from '../../Images_2/mafia.jpg'
import spyfall from '../../Images_2/spyfall.jpg'
import secretHitler from '../../Images_2/secret_hitler.jpg'
import taboo from '../../Images_2/taboo.jpg'

function Games() {
    const factGameLink = 'https://the-fact-game.netlify.app'
    const garticLink = 'https://gartic.io/'
    const scattergoriesLink = 'https://swellgarfo.com/scattergories/'
    const amongUsLink = 'https://g.co/kgs/nWf2FC'
    const codenamesLink = 'https://codenames.game/'
    const mafiaLink = 'https://mafia.gg/'
    const spyfallLink = 'https://www.spyfall.app/'
    const secretHitlerLink = 'https://secrethitler.io/'
    const tabooLink = 'https://playtaboo.com/playpage'

    const pageBio =
        "We believe team building is an important factor when working together. Whether it's having fun playing games, competing against each other, tackling puzzles together, or just having a friendly chat. We want you build trust amongst your team mates, discover each others strengths and weaknesses to create a cohesive team but most of all we want you to have fun! Here you'll find a selection of games and energisers within to help you achieve this"

    const showCaseBio =
        "Learn interesting things about your cohort in FACTS! Two statements are handed in from each player, one is a fact and the other is lie. The aim is to guess who's fact it is and then which statement of theirs is the fact."

    return (
        <>
            <div className={styles.headerContainer}>
                <img
                    className={styles.banner}
                    alt="Team Building img"
                    src={teamBuildingBanner}
                />
                <div className={styles.textContainer}>
                    <Title className={styles.title} text={'Game'} />
                    <p className={styles.pageBio}>{pageBio}</p>
                </div>
            </div>
            <div className={styles.showCaseContainer}>
                <div className={styles.textShowCaseContainer}>
                    <Title className={styles.showCaseTitle} text={'Facts!'} />
                    <p className={styles.showCaseBio}>{showCaseBio}</p>
                    <div className={styles.button_container}>
                        <Button text="Play Now" link={factGameLink} />
                    </div>
                </div>
                <img
                    className={styles.showCaseImage}
                    alt="showCase Facts"
                    src={banner2}
                />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.subTitle}>
                    <Subtitle text={'Select Your Game'} />
                </div>
                <div className={styles.gameCardContainer}>
                    <GameCard
                        text={'Facts!'}
                        image={banner2}
                        link={factGameLink}
                    />
                    <GameCard
                        text={'Gartic'}
                        image={gartic}
                        link={garticLink}
                    />
                    <GameCard
                        text={'Among Us'}
                        image={'./Images/amongUs.png'}
                        link={amongUsLink}
                    />
                    <GameCard
                        text={'Scattergories'}
                        image={scattergories}
                        link={scattergoriesLink}
                    />
                    <GameCard
                        text={'Codenames'}
                        image={codenames}
                        link={codenamesLink}
                    />
                    <GameCard text={'Mafia'} image={mafia} link={mafiaLink} />
                    <GameCard
                        text={'Spyfall'}
                        image={spyfall}
                        link={spyfallLink}
                    />
                    <GameCard
                        text={'Secret Hitler'}
                        image={secretHitler}
                        link={secretHitlerLink}
                    />
                    <GameCard text={'Taboo'} image={taboo} link={tabooLink} />
                </div>
            </div>
        </>
    )
}

export default Games
