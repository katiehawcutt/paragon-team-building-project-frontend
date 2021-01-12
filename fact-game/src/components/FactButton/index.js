import React from 'react'
import styles from './FactButton.module.css'

import useSound from 'use-sound'
import ping from '../../sounds/selectAnswer.mp3'

export default function Fact({ factText, selected, handleClick }) {
    const [ButtonSound] = useSound(ping)

    return (
        <button
            className={selected === true ? styles.selectedFact : styles.fact}
            onClick={() => {
                handleClick()
                ButtonSound()
            }}
        >
            {factText}
        </button>
    )
}
