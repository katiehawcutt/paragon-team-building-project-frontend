import React from 'react'
import styles from './Games.module.css'
import GameCard from '../../components/GameCard/GameCard'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import Background from '../../components/Background/Background'

function Games({ text }) {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.title}>
                    <Title text={'Featured Games'} />
                </div>
                <div className={styles.header}>
                    <Background />
                </div>
                <div>
                    <Subtitle
                        className={styles.subHeader}
                        text={'Select Your Game'}
                    />
                </div>
                <div className={styles.gameCardContainer}>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        </>
    )
}

export default Games
