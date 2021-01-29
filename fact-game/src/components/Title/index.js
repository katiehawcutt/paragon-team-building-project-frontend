import React from 'react'
import styles from './Title.module.css'
import cn from 'classnames'

function Title({ text, className = '' }) {
    return (
        <h1 className={cn(styles.title, className)} data-testid={'Title'}>
            {text}
        </h1>
    )
}

export default Title
