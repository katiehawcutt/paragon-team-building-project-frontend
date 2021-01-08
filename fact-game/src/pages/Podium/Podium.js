import React from 'react'
import cn from 'classnames'
import styles from './Podium.module.css'

import Header from '../../components/Header/Header'
import UserPic from '../../components/UserPic/UserPic'
import Leaderboard from '../../components/Leaderboard/Leaderboard'

const IndividualPodium = ({
    children,
    leftColour,
    rightColour,
    bottomHeight,
    position,
}) => {
    const TOP_HEIGHT = 15
    const TOP_WIDTH = 100
    const BOTTOM_WIDTH = 90
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
            <div style={{ position: 'relative', margin: '0 0.5rem' }}>
                <span
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: '900',
                    }}
                >
                    {position}
                </span>
                <svg
                    width="100"
                    height={TOP_HEIGHT + bottomHeight}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g className="top">
                        {/* Top left */}
                        <rect
                            className="top-left"
                            height={TOP_HEIGHT}
                            width="50"
                            y="0"
                            x="0"
                            fill-opacity="null"
                            stroke-opacity="null"
                            fill="#deecf1"
                        />
                        {/* Top right */}
                        <rect
                            className="top-right"
                            height={TOP_HEIGHT}
                            width={TOP_WIDTH / 2}
                            y="0"
                            x={TOP_WIDTH / 2}
                            fill-opacity="null"
                            stroke-opacity="null"
                            fill="#c7e2e7"
                        />
                    </g>
                    <g className="bottom">
                        {/* Bottom left */}
                        <rect
                            className="bottom-left"
                            height={bottomHeight}
                            width={BOTTOM_WIDTH / 2}
                            y={TOP_HEIGHT}
                            x="5"
                            fill-opacity="null"
                            stroke-opacity="null"
                            fill={leftColour}
                        />
                        {/* Bottom right */}
                        <rect
                            className="bottom-right"
                            height={bottomHeight}
                            width={BOTTOM_WIDTH / 2}
                            y={TOP_HEIGHT}
                            x="50"
                            fill-opacity="null"
                            stroke-opacity="null"
                            fill={rightColour}
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default function Podium({ leaderboard, winners }) {
    return (
        <>
            <Header />
            <div className={cn(styles.pageContainer, 'animateIn')}>
                <main className={styles.mainContainer}>
                    <div
                        className={styles.podium_container}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            alignItems: 'flex-end',
                        }}
                    >
                        <IndividualPodium
                            leftColour="#454b82"
                            rightColour="#3d4273"
                            bottomHeight={100}
                            position="3"
                        >
                            <UserPic />
                        </IndividualPodium>

                        <IndividualPodium
                            leftColour="#d99444"
                            rightColour="#c2853c"
                            bottomHeight={150}
                            position="1"
                        >
                            <UserPic />
                        </IndividualPodium>
                        <IndividualPodium
                            leftColour="#6d44d9"
                            rightColour="#5c37bb"
                            bottomHeight={125}
                            position="2"
                        >
                            <UserPic />
                        </IndividualPodium>
                    </div>
                </main>
            </div>

            <div className={cn(styles.pageContainer, 'animateIn')}>
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
