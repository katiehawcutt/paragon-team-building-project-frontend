import React from 'react'

import styles from './LoginLanding.module.css'

import Title from '../../components/Title'
import LoginButton from '../../components/LoginButton'

function LoginLanding() {
    return (
        <div className={styles.pageContainer}>
            <Title text="Facts!" className={styles.title} />
            <img
                src="./Images/wavingTeam.png"
                alt="a group of people waving"
                className={styles.groupWavingImage}
            />
            <LoginButton text="Login" />
        </div>
    )
}

export default LoginLanding
