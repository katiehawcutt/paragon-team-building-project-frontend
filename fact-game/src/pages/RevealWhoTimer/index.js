import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import RevealTimer from '../../components/RevealTimer'

const useStyles = makeStyles((theme) => ({
    tableData: {
        color: 'white',
        fontSize: '1rem',
        padding: '0.5rem',
    },
    tableHeader: {
        fontWeight: 'bold',
    },
}))

export default function RevealWhoTimer({
    roundNumber,
    secondsLeft,
    votePercentages,
}) {
    const classes = useStyles()

    const percentagesTable = (
        <table>
            <thead>
                <tr>
                    <th className={cn(classes.tableData, classes.tableHeader)}>
                        Player
                    </th>
                    <th className={cn(classes.tableData, classes.tableHeader)}>
                        Percentage
                    </th>
                </tr>
            </thead>
            <tbody>
                {votePercentages.map(
                    ({ displayName, displayPercentage }, i) => {
                        return (
                            <tr key={i}>
                                <th className={cn(classes.tableData)}>
                                    {displayName}
                                </th>
                                <th className={cn(classes.tableData)}>
                                    {displayPercentage}
                                </th>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
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
