import React from 'react'
import styles from './FlipCard.module.css'

function FlipCard({ image, text }) {
    return (
        <div className={styles.container}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <img
                            className={styles.cohortImage}
                            alt="user icon"
                            src="./Images/userIcon.png"
                        />
                        <h1 className={styles.cohortName}>Natalie Posteraro</h1>
                    </div>
                    <div className={styles.flipCardBack}>
                        <h2>About</h2>
                        <div className={styles.cohortInfoContainer}>
                            <h3 className={styles.info}>Info:</h3>
                            <h3 className={styles.hobbies}>Hobbies:</h3>
                            <h3 className={styles.skills}>Skills:</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
