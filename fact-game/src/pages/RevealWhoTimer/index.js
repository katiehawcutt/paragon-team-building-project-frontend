import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'

import useSound from 'use-sound'
import alert from '../../sounds/alert.mp3'

import RevealTimer from '../../components/RevealTimer'

const useStyles = makeStyles((theme) => ({
    tablePreface: {
        fontSize: '1.5rem',
        lineHeight: '1.2rem',
        color: 'white',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        letterSpacing: '0.2rem',
    },
    tableContainer: {
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '1rem',
        backgroundColor: '#6d44d9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableData: {
        color: 'white',
        fontSize: '1rem',
        textAlign: 'center',
        padding: '0.5rem',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        letterSpacing: '0.2rem',
    },
    tableHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '5px 3px 3px rgba(0, 0, 0, 0.25)',
        letterSpacing: '0.2rem',
    },
}))

export default function RevealWhoTimer({
    roundNumber,
    secondsLeft,
    votePercentages,
}) {
    const [alertSound, { stop }] = useSound(alert)

    useEffect(() => {
        const timeoutId = setTimeout(alertSound, 200)
        return () => {
            stop()
            clearTimeout(timeoutId)
        }
    }, [alertSound, stop])
    const classes = useStyles()

    const percentagesTable = (
        <div className={classes.tableContainer}>
            <p className={classes.tablePreface}>Most people voted for:</p>
            <table>
                <thead>
                    {/* <tr>
                        <th
                            className={cn(
                                classes.tableData,
                                classes.tableHeader
                            )}
                        >
                            Player
                        </th>
                        <th
                            className={cn(
                                classes.tableData,
                                classes.tableHeader
                            )}
                        >
                            Percentage of votes
                        </th>
                    </tr> */}
                </thead>
                <tbody>
                    {votePercentages.map(
                        ({ displayName, displayPercentage }, i) => {
                            return (
                                <tr key={i}>
                                    <td className={cn(classes.tableData)}>
                                        {displayName}
                                    </td>
                                    <td className={cn(classes.tableData)}>
                                        {displayPercentage}
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )

    return (
        <RevealTimer
            title={'The facts belong to...'}
            roundNumber={roundNumber}
            secondsLeft={secondsLeft}
        >
            {votePercentages.length > 0 ? percentagesTable : null}
        </RevealTimer>
    )
}
