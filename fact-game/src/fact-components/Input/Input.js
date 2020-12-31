import React from 'react'
import styles from './input.module.css'

function Input({ placeholder }) {
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input_box}
            />
        </div>
    )
}

export default Input
