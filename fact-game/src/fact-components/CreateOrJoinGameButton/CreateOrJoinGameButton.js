import React from 'react'
import styles from './CreateOrJoinGameButton.module.css'
// import createGameLogo from '../../Images/GameIcon2.png'

function CreateOrJoinGameButton({ buttonText, image, color }) {
    return (
        <button
            className={styles.createJoinButton}
            style={{ backgroundColor: { color } }}
        >
            <img className={styles.img} src={image}></img>
            {buttonText}
        </button>
    )
}

export default CreateOrJoinGameButton
