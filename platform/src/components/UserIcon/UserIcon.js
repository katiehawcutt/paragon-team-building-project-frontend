import React from 'react'
import styles from './UserIcon.module.css'

function UserIcon({ imageSrc }) {
    return (
        <>
            <div className={styles.userIconContainer}>
                <img className={styles.userPhoto} src={imageSrc} />
            </div>
        </>
    )
}

export default UserIcon
