import React from 'react'

import styles from './Leaderboard.module.css'
import cn from 'classnames'

export default function LeaderBoard({ leaderboard }) {
    return (
        <div>
            <table className={styles.leaderTable}>
                <thead>
                    <tr className={styles.tableHeadingsRow}>
                        <th className={styles.tableHeading} colSpan="3">
                            Leaderboard
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((person, i) => {
                        /**
                         * Apply a specific class if position is top 3, otherwise default
                         * to generic other class.
                         */
                        const colourClass =
                            [
                                styles.circleFirstPlace,
                                styles.circleSecondPlace,
                                styles.circleThirdPlace,
                            ][person.position - 1] ?? styles.circleOtherPlace

                        const className = cn(styles.circle, colourClass)

                        return (
                            <tr key={i}>
                                <td className={styles.leaderboardOrder}>
                                    <span className={className}>
                                        {person.position}
                                    </span>
                                </td>
                                <td className={styles.tableData}>
                                    {person.displayName}
                                </td>
                                <td className={styles.tableData}>
                                    {person.score}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
