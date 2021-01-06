import React from 'react'
import styles from './Home.module.css'
import Background from '../../components/Background/Background'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'

function Home() {
    return (
        <div className={styles.home_container}>
            <Background />
            <Button />
            <Title />
            style=
            {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
            }}
            <h1>Home</h1>
        </div>
    )
}

export default Home
