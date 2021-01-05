import React from 'react'
import styles from './Podium.module.css'
import Header from '../../components/Header/Header'
import UserPic from '../../components/UserPic/UserPic'
import Leaderboard from '../../components/Leaderboard/Leaderboard'

export default function Podium({ leaderboard, winners }) {
    return (
        <>
            <Header />
            <div className={styles.pageContainer}>
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
                                    src="../Images/crown-resized.png"
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
                    {winners.length > 1 && (
                        <div className={styles.podiumTitle}>
                            The joint winners are: {winners.join(',')}!
                        </div>
                    )}
                    {winners.length === 1 && (
                        <div className={styles.podiumTitle}>
                            {winners[0]} wins!
                        </div>
                    )}
                    <Leaderboard leaderboard={leaderboard} />
                </main>
            </div>
        </>
    )
}
