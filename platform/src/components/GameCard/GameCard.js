import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({ text, image, link }) {
    return (
        <div className={styles.card}>
            <input
                className={styles.gameCard}
                type="image"
                id="image"
                alt="Game img button"
                src={image}
                onClick={() => {
                    window.open(link)
                }}
            />
            <h2 className={styles.gameTitle}>{text}</h2>
        </div>
    )
}

// <div className={styles.gameTitleContainer}>
// <div className={styles.iconContainer}>
// </div>
{
    /* <img
                className={styles.gameCard}
                alt="Games img Card"
                src={image}
                onclick={handleClick}
            /> */
}
