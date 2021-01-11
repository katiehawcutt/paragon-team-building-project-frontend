import React from 'react'
import styles from './Background.module.css'

export default function Background({ image }) {
    return (
        <div
            data-testid="background"
            className={styles.background_container}
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    )
}
