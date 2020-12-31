import React from 'react'
import styles from './FactInput.module.css'

function FactInput({ placeholder, value }) {
    return (
        <div>
            <textarea
                className={styles.fact_input_box}
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default FactInput
