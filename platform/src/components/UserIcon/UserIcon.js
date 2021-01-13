import React from 'react'
import styles from './UserIcon.module.css'

function UserIcon({ imageSrc }) {
    return (
        <>
            <div className={styles.userIconContainer}>
                {/* <img
                    data-testid="userTest"
                    className={styles.userPhoto}
                    src={imageSrc}
                    alt="user"
                /> */}
                <div
                    className={styles.userPhoto}
                    style={{
                        backgroundImage: `url(${imageSrc})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
        </>
    )
}

export default UserIcon
