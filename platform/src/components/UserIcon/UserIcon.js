import React from 'react'
import styles from './UserIcon.module.css'

function UserIcon({ imageSrc }) {
    return (
        <>
            <div className={styles.userIconContainer}>
                <img
                    data-testid="userTest"
                    className={styles.userPhoto}
                    src={imageSrc}
                    alt="user"
                />
            </div>
        </>
    )
}

export default UserIcon
