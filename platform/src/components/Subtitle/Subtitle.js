import React from 'react'
import styles from './Subtitle.module.css'

function Subtitle({ text }) {
    return (
        <div>
            <h2 className={styles.subtitle}>{text}</h2>
        </div>
    )
}

export default Subtitle
