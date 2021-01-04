import React from 'react'
import css from './Round.module.css'

/**
 * Displays the current game round number.
 */
export default function Round({ roundNumber }) {
    return (
        <div className={css.RoundContainer}>
            <span className={css.RoundLabel}>Round #{roundNumber}</span>
        </div>
    )
}
