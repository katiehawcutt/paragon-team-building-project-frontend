import React from 'react'
import styles from './Games.module.css'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard/GameCard'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'

import { LINK_TO_FACTS } from '../../constants/externalUrls'

function Games() {
    const buttonColor = '#FE4042'
    const garticLink = 'https://gartic.io/'
    const scattergoriesLink = 'https://swellgarfo.com/scattergories/'
    const amongUsLink = 'https://g.co/kgs/nWf2FC'
    const codenamesLink = 'https://codenames.game/'
    const mafiaLink = 'https://mafia.gg/'
    const spyfallLink = 'https://www.spyfall.app/'
    const secretHitlerLink = 'https://secrethitler.io/'
    const tabooLink = 'https://playtaboo.com/playpage'
    const codeWars = 'https://www.codewars.com'
    const cssDiner = 'https://flukeout.github.io'
    const gridGarden = 'https://cssgridgarden.com'
    const flexboxFroggy = 'https://flexboxfroggy.com'

    const pageBio =
        "We believe team building is an important factor when working together, whether it's having fun playing games, competing against each other, tackling puzzles together, or just having a friendly chat. We want you to build trust with your team mates, discover each others strengths and weaknesses and have fun getting to know each other in order to develop cohesive and effective teams. Here you'll find a selection of games and energisers to help you achieve this."

    const showCaseBio =
        'Learn interesting things about your cohort in FACTS! Two statements are handed in from each player, one is a fact and the other is a lie. The aim is to guess who the facts belong to and which one of them is true.'

    return (
        <>
            <div className={styles.headerContainer}>
                <img
                    className={styles.bannerImage}
                    alt="Team Building img"
                    src={'./Images/team-building.jpg'}
                />
                <div className={styles.textContainer}>
                    <Title className={styles.title} text={`Let's Play...`} />
                    <p className={styles.pageBio}>{pageBio}</p>
                </div>
            </div>
            <div className={styles.showCaseContainer}>
                <div className={styles.textShowCaseContainer}>
                    <Title className={styles.title} text={'Facts!'} />
                    <p className={styles.showCaseBio}>{showCaseBio}</p>
                    <div className={styles.button_container}>
                        <Button
                            text="Play Now"
                            link={LINK_TO_FACTS}
                            color={buttonColor}
                        />
                    </div>
                </div>
                <img
                    className={styles.showCaseImage}
                    alt="showCase Facts"
                    src={'./Images/facts_logo.png'}
                />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.subTitle}>
                    <Subtitle text={'Select Your Activity'} />
                </div>
                <div className={styles.gameCardContainer}>
                    <GameCard
                        text={'Facts!'}
                        image={'./Images/facts_no_center.png'}
                        link={LINK_TO_FACTS}
                    />
                    <GameCard
                        text={'Gartic'}
                        image={'./Images/gartic.png'}
                        link={garticLink}
                    />
                    <GameCard
                        text={'Codewars'}
                        image={'./Images/codeWars.png'}
                        link={codeWars}
                    />
                    <GameCard
                        text={'Among Us'}
                        image={'./Images/amongUs.png'}
                        link={amongUsLink}
                    />
                    <GameCard
                        text={'Scattergories'}
                        image={'./Images/scattergoriesImg.png'}
                        link={scattergoriesLink}
                    />
                    <GameCard
                        text={'Codenames'}
                        image={'./Images/codenames.png'}
                        link={codenamesLink}
                    />
                    <GameCard
                        text={'Mafia'}
                        image={'./Images/mafia.png'}
                        link={mafiaLink}
                    />
                    <GameCard
                        text={'Grid Garden'}
                        image={'./Images/gridGarden.png'}
                        link={gridGarden}
                    />
                    <GameCard
                        text={'Spyfall'}
                        image={'./Images/spyfall.jpg'}
                        link={spyfallLink}
                    />
                    <GameCard
                        text={'Secret Hitler'}
                        image={'./Images/secret_hitler.png'}
                        link={secretHitlerLink}
                    />
                    <GameCard
                        text={'Flexbox Froggy'}
                        image={'./Images/flexboxFroggy.png'}
                        link={flexboxFroggy}
                    />
                    <GameCard
                        text={'Taboo'}
                        image={'./Images/taboo.png'}
                        link={tabooLink}
                    />
                    <GameCard
                        text={'CSS Diner'}
                        image={'./Images/cssDiner.png'}
                        link={cssDiner}
                    />
                </div>
            </div>
        </>
    )
}

export default Games
