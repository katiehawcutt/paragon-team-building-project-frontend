import React from 'react'
import styles from './FactButton.module.css'

export default function Fact({ factText, selected, handleClick }) {
    return (
        <button
            className={selected === true ? styles.selectedFact : styles.fact}
            onClick={handleClick}
        >
            {factText}
        </button>
    )
}
