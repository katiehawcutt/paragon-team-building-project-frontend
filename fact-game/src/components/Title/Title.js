import React from 'react'
import styles from './Title.module.css'

function Title({ text }) {
    return (
        <div>
            <h1 className={styles.title}>{text}</h1>
        </div>
    )
}

export default Title
