import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({
    handleClick,
    text,
    description,
    image,
    alt,
}) {
    return (
        <div className={styles.card}>
            <div className={styles.gameTitleContainer}>
                <h2 className={styles.gameTitle}>{text}</h2>
            </div>
            <div className={styles.iconContainer}>
                <img
                    data-testid="testGameCard"
                    className={styles.gameIcon}
                    alt={alt}
                    src={image}
                    onClick={handleClick}
                />
            </div>
            <div className={styles.gameDescription}>
                <p>{description}</p>
            </div>
        </div>
    )
}
