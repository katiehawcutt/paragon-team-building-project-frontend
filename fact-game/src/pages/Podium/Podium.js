import React from 'react'
import styles from './Podium.module.css'
import Header from '../../fact-components/Header/Header'
import UserPic from '../../fact-components/UserPic/UserPic'
import Leaderboard from '../../fact-components/Leaderboard/Leaderboard'

const winner = 'Katie'

export default function Podium() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.podium_container}>
                    <div className={styles.thirdPlace_container}>
                        <UserPic />
                        <div className={styles.banner}>
                            <img
                                src="../Images/3rd.png"
                                alt="podium-stand"
                                className={styles.podium_stand3}
                            />
                            <h2 className={styles.positionNum3}>3</h2>
                        </div>
                    </div>
                    <div className={styles.fistPlace_container}>
                        <UserPic />
                        <div className={styles.banner}>
                            <img
                                src="../Images/crown.png"
                                alt="crown"
                                className={styles.crown}
                            ></img>
                            <img
                                src="./Images/1st.png"
                                alt="podium-stand"
                                className={styles.podium_stand1}
                            />
                            <h2 className={styles.positionNum1}>1</h2>
                        </div>
                    </div>
                    <div className={styles.secondPlace_container}>
                        <UserPic />
                        <div className={styles.banner}>
                            <img
                                src="./Images/2nd.png"
                                alt="podium-stand"
                                className={styles.podium_stand2}
                            />
                            <h2 className={styles.positionNum2}>2</h2>
                        </div>
                    </div>
                </div>
            </main>
            <h1 className={styles.winnerText}>{winner}, wins!</h1>
            <div>
                <Leaderboard
                    leaderboard={[
                        { displayName: 'Khang', score: 15 },
                        { displayName: 'Natalie', score: 7 },
                        { displayName: 'Bradley', score: 5 },
                        { displayName: 'Arshi', score: 3 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                        { displayName: 'Katie', score: 1 },
                    ]}
                />
            </div>
        </div>
    )
}
