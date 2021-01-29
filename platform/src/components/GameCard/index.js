import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({ text, image, link }) {
    return (
        <div className={styles.card}>
            <a
                className={styles.gameCard}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className={styles.gameImage}
                    src={image}
                    alt="Game img button"
                />
                <h2 className={styles.gameTitle}>{text}</h2>
            </a>
        </div>
    )
}
