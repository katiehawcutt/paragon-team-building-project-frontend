import React from 'react'
import styles from './ErrorMessage.module.css'

function ErrorMessage() {
    return (
        <div className={styles.pageContainer}>
            <p className={styles.loggingInMessage}>
                Oops something went wrong...
            </p>
        </div>
    )
}

export default ErrorMessage
