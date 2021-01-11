import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({ text, image, link }) {
    return (
        <div className={styles.card}>
            <input
                className={styles.gameCard}
                data-testid="testGameCard"
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
