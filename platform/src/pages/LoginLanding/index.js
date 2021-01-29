import React from 'react'
import styles from './LoginLanding.module.css'

import Title from '../../components/Title'
import LoginButton from '../../components/LoginButton'

function LoginLanding() {
    return (
        <>
            <div className={styles.pageContainer}>
                <img
                    src="./Images/SoCLogo.png"
                    alt="School of Code logo"
                    className={styles.socLogo}
                />
                <Title
                    text="School of Code Team Building Platform"
                    className={styles.title}
                />
                <LoginButton text={'Login'} color={'#fe4042'} />
            </div>
        </>
    )
}

export default LoginLanding
