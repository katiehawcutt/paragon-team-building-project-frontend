import React from 'react'
import cn from 'classnames'
import styles from './GameStarting.module.css'

import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

function GameStarting() {
    return (
        <>
            <Header />
            <div className={cn(styles.pageContainer, 'animateIn')}>
                <Title text="The game is about to start..." />
                <img
                    className={styles.hourglassImage}
                    src="./Images/hourglass.png"
                    alt="spinning eggtimer"
                ></img>
            </div>
        </>
    )
}

export default GameStarting
