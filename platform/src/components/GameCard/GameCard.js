import React from 'react'
import styles from './GameCard.module.css'
import { Avatar } from '@chakra-ui/react'

export default function GameCard({ image }) {
    return (
        <div className={styles.card}>
            <div className={styles.gameTitle}>
                <h2>Gartic</h2>
            </div>
            <div className={styles.iconContainer}>
                <img
                    className={styles.gameIcon}
                    alt="Gartic Game Icon"
                    src="https://gartic.io/static/images/thumb.png?v=10"
                />
            </div>
            <div className={styles.gameDescription}>
                <p>Information about the game here!</p>
            </div>
        </div>
    )
}
