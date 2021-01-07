import React from 'react'
import styles from './GameCard.module.css'
import { Avatar } from '@chakra-ui/react'

export default function GameCard({ handleClick, text, description, image }) {
    return (
        <div className={styles.card}>
            <div className={styles.gameTitleContainer}>
                <h2 className={styles.gameTitle}>{text}</h2>
            </div>
            <div className={styles.iconContainer}>
                <img
                    className={styles.gameIcon}
                    alt="Gartic Game Icon"
                    src={image}
                    onclick={handleClick}
                />
            </div>
            <div className={styles.gameDescription}>
                <p>{description}</p>
            </div>
        </div>
    )
}
