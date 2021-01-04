import React from 'react'
import styles from './GameLobby.module.css'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

function GameLobby() {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Title text="Waiting for other players to join..." />
                <img
                    className={styles.hourglassImage}
                    src="./Images/hourglass.png"
                ></img>
            </main>
        </>
    )
}

export default GameLobby
