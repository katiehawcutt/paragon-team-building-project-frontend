import React from 'react'
import styles from './LobbyList.module.css'

function LobbyList({ playersInLobby }) {
    return (
        <div className={styles.playerContainer}>
            <h3 className={styles.h3}>Game Lobby</h3>
            {playersInLobby.map((player, i) => {
                return (
                    <p key={i} className={styles.playerName}>
                        {player}
                    </p>
                )
            })}
        </div>
    )
}

export default LobbyList
