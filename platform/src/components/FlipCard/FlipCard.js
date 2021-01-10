import React from 'react'
import styles from './FlipCard.module.css'
import UserIcon from '../UserIcon/UserIcon'

const bio = `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`

function FlipCard({ imageSrc, personName }) {
    return (
        <div className={styles.container}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <UserIcon imageSrc={imageSrc} />
                        <h1 className={styles.personName}>{personName}</h1>
                    </div>
                    <div className={styles.flipCardBack}>
                        <h2 className={styles.h2}>Bio:</h2>
                        <div className={styles.cohortInfoContainer}>
                            <p className={styles.bio}>{bio} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
