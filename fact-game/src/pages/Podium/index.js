import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import styles from './Podium.module.css'

import useSound from 'use-sound'
import fanfare from '../../sounds/fanfare.mp3'

import Header from '../../components/Header'
import UserPic from '../../components/UserPic'
import Leaderboard from '../../components/Leaderboard'
import PodiumStand from '../../components/PodiumStand'

const useStyles = makeStyles((theme) => ({
    podiumStandsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'flex-end',
        // columnGap: '1rem',
    },
    crown: {
        width: '75px',
        transform: 'translate(20px, -100vh) rotate(20deg)',
        animation: '$crownFalling 1.5s linear forwards',
    },
    silverCrown: {
        animationDelay: '0.5s',
    },
    bronzeCrown: {
        animationDelay: '1s',
    },
    '@keyframes crownFalling': {
        '0%': {
            transform: 'translate(20px, -100vh) rotate(20deg)',
            display: 'none',
        },
        '100%': {
            transform: 'translate(20px, 13px) rotate(20deg)',
        },
    },
}))

export default function Podium({ leaderboard, winners }) {
    const classes = useStyles()

    const [volume] = useState(0.5)
    const [fanfareSound, { stop }] = useSound(fanfare, { volume })

    useEffect(() => {
        const timeoutId = setTimeout(fanfareSound, 200)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [fanfareSound, stop])

    return (
        <>
            <Header />
            <div className={cn(styles.pageContainer, 'animateIn')}>
                <main className={styles.mainContainer}>
                    <div className={classes.podiumStandsContainer}>
                        <PodiumStand
                            leftColour="#454b82"
                            rightColour="#3d4273"
                            bottomHeight={100}
                            position="3"
                            avatar={<UserPic />}
                            crown={
                                <img
                                    src="../Images/crown-resized-trimmed-bronze.png"
                                    alt="crown"
                                    className={cn(
                                        classes.crown,
                                        classes.bronzeCrown
                                    )}
                                />
                            }
                        />
                        <PodiumStand
                            leftColour="#d99444"
                            rightColour="#c2853c"
                            bottomHeight={150}
                            position="1"
                            avatar={<UserPic />}
                            crown={
                                <img
                                    src="../Images/crown-resized-trimmed.png"
                                    alt="crown"
                                    className={classes.crown}
                                />
                            }
                        />
                        <PodiumStand
                            leftColour="#6d44d9"
                            rightColour="#5c37bb"
                            bottomHeight={125}
                            position="2"
                            avatar={<UserPic />}
                            crown={
                                <img
                                    src="../Images/crown-resized-trimmed-silver.png"
                                    alt="crown"
                                    className={cn(
                                        classes.crown,
                                        classes.silverCrown
                                    )}
                                />
                            }
                        />
                    </div>
                </main>
                {winners.length > 1 && (
                    <div className={styles.podiumTitle}>
                        {winners.length > 3
                            ? 'Congratulations to all the winners!'
                            : `The joint winners are: ${winners.join(', ')}!`}
                    </div>
                )}
                {winners.length === 1 && (
                    <div className={styles.podiumTitle}>{winners[0]} wins!</div>
                )}
                <Leaderboard leaderboard={leaderboard} />
            </div>
        </>
    )
}
