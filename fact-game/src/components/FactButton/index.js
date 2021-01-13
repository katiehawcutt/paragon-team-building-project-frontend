import React, { useState } from 'react'
import styles from './FactButton.module.css'

import useSound from 'use-sound'
import ping from '../../sounds/selectAnswer.mp3'

export default function Fact({ factText, selected, handleClick }) {
    const [volume] = useState(0.5)
    const [ButtonSound] = useSound(ping, { volume })

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
